const express = require('express');
const fs = require('fs');
const path = require('path');
const exe = require('../data');
const router = express.Router();

/* ---------- Dashboard ---------- */
router.get('/dashboard', (req, res) => {
  res.render('admin/home.ejs');
});

/* ---------- Course Management ---------- */
router.get('/course', async (req, res) => {
  const courseSql = `SELECT * FROM courses`;
  const courseResult = await exe(courseSql);
  res.render('admin/course_management.ejs', { courses: courseResult });
});

router.post('/save_courses', async (req, res) => {
  try {
    const {
      title, subtitle, description, duration,
      eligibility, batchSize, schedule, price, topics
    } = req.body;

    let iconPath = '';
    if (req.files && req.files.icon) {
      iconPath = Date.now() + '_' + req.files.icon.name;
      await req.files.icon.mv('public/images/' + iconPath);
    }

    const topicsArray = topics.split(',').map(t => t.trim());
    const sql = `
      INSERT INTO courses 
      (title, subtitle, price, description, duration, eligibility, batch_size, schedule, topics, icon)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      title, subtitle, price, description, duration,
      eligibility, batchSize, schedule,
      JSON.stringify(topicsArray), iconPath
    ];

    await exe(sql, values);
    res.redirect('/admin/course');
  } catch (err) {
    console.error('Error saving course:', err);
    res.status(500).send('Failed to save course');
  }
});

router.get('/editCourse/:id', async (req, res) => {
  try {
    const sql = `SELECT * FROM courses WHERE id = ?`;
    const [course] = await exe(sql, [req.params.id]);

    if (!course) return res.status(404).send('Course not found');

    course.topics = JSON.parse(course.topics).join(', ');
    res.render('admin/editCourse.ejs', { course });
  } catch (err) {
    console.error('Error loading course:', err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/update_course', async (req, res) => {
  try {
    const {
      id, title, subtitle, description, duration,
      eligibility, batch_size, schedule, price, topics, old_icon
    } = req.body;

    let iconPath = old_icon;
    if (req.files && req.files.icon) {
      iconPath = Date.now() + '_' + req.files.icon.name;
      await req.files.icon.mv('public/images/' + iconPath);
    }

    const topicsArray = topics.split(',').map(t => t.trim());
    const sql = `
      UPDATE courses SET
        title = ?, subtitle = ?, price = ?, description = ?, duration = ?,
        eligibility = ?, batch_size = ?, schedule = ?, topics = ?, icon = ?
      WHERE id = ?
    `;
    const values = [
      title, subtitle, price, description, duration,
      eligibility, batch_size, schedule,
      JSON.stringify(topicsArray), iconPath, id
    ];

    await exe(sql, values);
    res.redirect('/admin/course');
  } catch (err) {
    console.error('Error updating course:', err);
    res.status(500).send('Failed to update course');
  }
});

router.get('/deleteCourse/:id', async (req, res) => {
  try {
    const [course] = await exe('SELECT icon FROM courses WHERE id = ?', [req.params.id]);

    if (course?.icon) {
      const filePath = path.join(__dirname, '..', 'public', 'images', course.icon);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await exe('DELETE FROM courses WHERE id = ?', [req.params.id]);
    res.redirect('/admin/course');
  } catch (err) {
    console.error('Error deleting course:', err);
    res.status(500).send('Failed to delete course');
  }
});

/* ---------- Pages (No DB) ---------- */
router.get('/batchManagement', (req, res) => res.render('admin/batchManagement.ejs'));
router.get('/testimonials', (req, res) => res.render('admin/testimonials.ejs'));
router.get('/students', (req, res) => res.render('admin/students.ejs'));
router.get('/notifications', (req, res) => res.render('admin/notifications.ejs'));

/* ---------- Contact Info CRUD ---------- */
router.get('/contactList', async (req, res) => {
  const result = await exe('SELECT * FROM contact_info');
  res.render('admin/contactList', { contacts: result });
});

router.get('/admin/contactList', async (req, res) => {
  const contacts = await exe(`SELECT * FROM contact_info`);
  res.render('admin/contactList', { contacts });
});
router.get('/editContact/:id', async (req, res) => {
  const id = req.params.id;
  const contact = await exe(`SELECT * FROM contact_info WHERE id = ?`, [id]);
  res.render('admin/editContact', { contact: contact[0] });
});

router.post('/updateContact', async (req, res) => {
  const d = req.body;

  const sql = `
    UPDATE contact_info SET
      phone_main = ?, phone_admissions = ?, phone_support = ?,
      email_general = ?, email_admissions = ?, email_support = ?,
      address_line1 = ?, address_line2 = ?, city = ?, state = ?, zipcode = ?, country = ?,
      facebook = ?, instagram = ?, linkedin = ?, youtube = ?
    WHERE id = ?
  `;

  const values = [
    d.phone_main, d.phone_admissions, d.phone_support,
    d.email_general, d.email_admissions, d.email_support,
    d.address_line1, d.address_line2, d.city, d.state, d.zipcode, d.country,
    d.facebook, d.instagram, d.linkedin, d.youtube,
    d.id
  ];

  await exe(sql, values);
  res.redirect('/admin/contactList');
});


router.get('/deleteContact/:id', async (req, res) => {
  await exe('DELETE FROM contact_info WHERE id = ?', [req.params.id]);
  res.redirect('/admin/contactList');
});

// contact message

// In admin_routes.js or a public API route
router.post('/submit-contact', async (req, res) => {
  const { name, email, phone, subject, course, message } = req.body;
  const sql = `
    INSERT INTO contact_messages (full_name, email, phone, subject, course, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  try {
    await exe(sql, [name, email, phone, subject, course, message]);
    res.status(200).json({ message: "Message saved successfully" });
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ message: "Server error" });
  }
});
// Show add form
router.get('/addSchedule', (req, res) => {
  res.render('admin/add_schedule');
});

// Handle form submission
router.post('/addSchedule', async (req, res) => {
  const d = req.body;

  const sql = `
    INSERT INTO class_schedules 
    (subject, heading, time_slot, days, instructors, seats_left) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  await exe(sql, [d.subject, d.heading, d.time_slot, d.days, d.instructors, d.seats_left]);
  res.redirect('/admin/class-schedules');
});

router.get('/class-schedules', async (req, res) => {
  var sql = `SELECT * FROM class_schedules`;
  var schedule = await exe(sql);
  var packet = {schedule}
  res.render('admin/class_schedules.ejs',packet);
});
// Show edit form
router.get('/editSchedule/:id', async (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM class_schedules WHERE id = ?`;
  let result = await exe(sql, [id]);
  res.render('admin/edit_schedule.ejs', { schedule: result[0] });
});

// Handle update
router.post('/editSchedule', async (req, res) => {
  var d = req.body;

  var sql = `UPDATE class_schedules SET subject=?, heading=?, time_slot=?, days=?, instructors=?, seats_left=? WHERE id=?`;
  await exe(sql, [d.subject, d.heading, d.time_slot, d.days, d.instructors, d.seats_left, d.id]);

  res.redirect('/admin/class-schedules');
});
router.get('/deleteSchedule/:id', async (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM class_schedules WHERE id = ?`;
  await exe(sql, [id]);
  res.redirect('/admin/class-schedules');
});


// founder bio
router.get('/founder-bio', async (req, res) => {
  try {
    const sql = `SELECT * FROM founder_bio LIMIT 1`;
    const result = await exe(sql);

    const founder = result.length > 0 ? result[0] : null;
    res.render('admin/founderBioForm', { founder });
  } catch (err) {
    console.error('Error fetching founder bio:', err);
    res.status(500).send('Internal Server Error');
  }
});
router.post('/updateFounderBio', async (req, res) => {
  const {
    id,
    name,
    title,
    short_intro,
    bio_paragraph1,
    bio_paragraph2,
    bio_paragraph3,
    years_experience,
    students_taught,
    top_rankers,
    books_authored
  } = req.body;

  const updateSql = `
    UPDATE founder_bio SET
      name = ?, 
      title = ?, 
      short_intro = ?, 
      bio_paragraph1 = ?, 
      bio_paragraph2 = ?, 
      bio_paragraph3 = ?, 
      years_experience = ?, 
      students_taught = ?, 
      top_rankers = ?, 
      books_authored = ?
    WHERE id = ?
  `;

  try {
    await exe(updateSql, [
      name,
      title,
      short_intro,
      bio_paragraph1,
      bio_paragraph2,
      bio_paragraph3,
      years_experience,
      students_taught,
      top_rankers,
      books_authored,
      id
    ]);
    res.redirect('/admin/founder-bio');
  } catch (err) {
    console.error('Error updating founder bio:', err);
    res.status(500).send('Failed to update founder bio');
  }
});

// Show all features
router.get('/educational-features', async (req, res) => {
  let sql = "SELECT * FROM educational_features ORDER BY id DESC";
  let features = await exe(sql);
  res.render('admin/educational_feature_list.ejs', { features });
});

// Show Add Form
router.get('/educational-features/add', (req, res) => {
  res.render('admin/educational_feature_form', { feature: null });
});

// Show Edit Form
router.get('/educational-features/edit/:id', async (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM educational_features WHERE id = ?";
  let result = await exe(sql, [id]);
  res.render('admin/educational_feature_form', { feature: result[0] });
});

// Save new feature
router.post('/educational-features/save', async (req, res) => {
  let { title, description, status } = req.body;
  let iconFile = req.files?.icon.name;

  let iconName = Date.now() + '_' + iconFile.name;
  await iconFile.mv('public/images/' + iconName);

  let sql = `INSERT INTO educational_features (icon, title, description, status) VALUES (?, ?, ?, ?)`;
  await exe(sql, [iconName, title, description, status]);
  res.redirect('/admin/educational-features');
});

// Update feature
router.post('/educational-features/update/:id', async (req, res) => {
  let { title, description, status } = req.body;
  let id = req.params.id;
  let sql;

  if (req.files && req.files.icon) {
    let iconFile = req.files.icon;
    let iconName = Date.now() + '_' + iconFile.name;
    await iconFile.mv('public/images/' + iconName);

    sql = `UPDATE educational_features SET icon=?, title=?, description=?, status=? WHERE id=?`;
    await exe(sql, [iconName, title, description, status, id]);
  } else {
    sql = `UPDATE educational_features SET title=?, description=?, status=? WHERE id=?`;
    await exe(sql, [title, description, status, id]);
  }

  res.redirect('/admin/educational-features');
});

// Delete feature
router.get('/educational-features/delete/:id', async (req, res) => {
  let sql = `DELETE FROM educational_features WHERE id=?`;
  await exe(sql, [req.params.id]);
  res.redirect('/admin/educational-features');
});



// Show all history records
router.get('/about-history', async (req, res) => {
  const sql = "SELECT * FROM about_history ORDER BY year ASC";
  const result = await exe(sql);
  res.render('admin/about_history_list', { history: result });
});

// Show add form
router.get('/about-history/add', (req, res) => {
  res.render('admin/about_history_form', { item: null });
});

// Save new history
router.post('/about-history/save', async (req, res) => {
  const { year, title, description } = req.body;
  const sql = "INSERT INTO about_history (year, title, description) VALUES (?, ?, ?)";
  await exe(sql, [year, title, description]);
  res.redirect('/admin/about-history');
});

// Show edit form
router.get('/about-history/edit/:id', async (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM about_history WHERE id=?";
  const result = await exe(sql, [id]);
  res.render('admin/about_history_form', { item: result[0] });
});

// Update
router.post('/about-history/update/:id', async (req, res) => {
  const { year, title, description } = req.body;
  const sql = "UPDATE about_history SET year=?, title=?, description=? WHERE id=?";
  await exe(sql, [year, title, description, req.params.id]);
  res.redirect('/admin/about-history');
});

// Delete
router.get('/about-history/delete/:id', async (req, res) => {
  const sql = "DELETE FROM about_history WHERE id=?";
  await exe(sql, [req.params.id]);
  res.redirect('/admin/about-history');
});


// Show all About data
router.get('/home_about_list', async (req, res) => {
  const [about] = await exe('SELECT * FROM about_excellence_academy LIMIT 1');
  const reasons = await exe('SELECT * FROM why_choose_us');
  res.render('admin/about_home', { about: about || null, reasons });
});

// Show form to add/edit About
router.get('/about/add', (req, res) => {
  res.render('admin/about_home_crud', { about: null, reason: null });
});

// Save About
router.post('/about/save', async (req, res) => {
  const { experience_years, description, students_taught, success_rate } = req.body;
  await exe('INSERT INTO about_excellence_academy (experience_years, description, students_taught, success_rate) VALUES (?, ?, ?, ?)', [experience_years, description, students_taught, success_rate]);
  res.redirect('/admin/home_about_list');
});

// Edit About
router.get('/about_edit/:id', async (req, res) => {
  const [about] = await exe('SELECT * FROM about_excellence_academy WHERE id = ?', [req.params.id]);
  res.render('admin/about_home_crud', { about, reason: null });
});

// Update About
router.post('/about/update/:id', async (req, res) => {
  const { experience_years, description, students_taught, success_rate } = req.body;
  await exe('UPDATE about_excellence_academy SET experience_years = ?, description = ?, students_taught = ?, success_rate = ? WHERE id = ?', [experience_years, description, students_taught, success_rate, req.params.id]);
  res.redirect('/admin/home_about_list');
});

// Delete About
router.get('/about/delete/:id', async (req, res) => {
  await exe('DELETE FROM about_excellence_academy WHERE id = ?', [req.params.id]);
  res.redirect('/admin/about_home');
});

module.exports = router;
