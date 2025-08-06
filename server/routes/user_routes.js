var express = require('express');
var exe = require('../data');
var router = express.Router();


router.get('/api/hero',async(req,res)=>{
    var homeSql = 'SELECT * FROM homehero'
    var result = await exe(homeSql)
    res.json(result);
})
router.get('/api/courses', async (req, res) => {
  try {
    var sql = 'SELECT * FROM courses';
    var result = await exe(sql);

    var formattedCourses = result.map(course => ({
      ...course,
      topics: safeParseJSON(course.topics), // safer parsing
    }));

    res.json(formattedCourses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ error: 'Failed to fetch courses', details: err.message });
  }
});
router.get('/api/contactinfo', async (req, res) => {
  var result = await exe('SELECT * FROM contact_info LIMIT 1'); // Assuming only 1 row
  res.json(result[0]); 
});
router.get('/api/courseSchedule',async(req,res)=>{
  var sql = 'SELECT * FROM class_schedules';
  var result = await exe(sql)
  res.send(result)
})
router.get('/api/founderBio',async(req,res)=>{
   var sql = `SELECT * FROM founder_bio LIMIT 1`;
    var result = await exe(sql);
    res.send(result)
})
router.get('/api/educational-features', async (req, res) => {
  try {
    var sql = `SELECT * FROM educational_features WHERE status = 'active'`;
    var result = await exe(sql);
    res.json(result);
  } catch (err) {
    console.error('Error fetching features:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/api/about-history', async (req, res) => {
  try {
    var sql = `SELECT * FROM about_history ORDER BY year ASC`;
    var result = await exe(sql);
    res.json(result); // Send to frontend as JSON
  } catch (err) {
    console.error("Error fetching about history:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get('/api/home_about', async (req, res) => {
  try {
    // Assuming this table has only 1 row
    const aboutSql = `SELECT * FROM about_excellence_academy LIMIT 1`;
    const reasonsSql = `SELECT reason FROM about_reasons`; // Use your actual reasons table

    const [about] = await exe(aboutSql); // Get the single row
    const reasons = await exe(reasonsSql); // Get all reasons

    res.json({
      about,
      reasons: reasons.map(r => r.reason), // Convert to array of strings
    });
  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get('/api/homecourses', async (req, res) => {
  try {
    var sql = 'SELECT * FROM courses ORDER BY id DESC LIMIT 4';
    var result = await exe(sql);

    var formattedCourses = result.map(course => ({
      ...course,
      topics: safeParseJSON(course.topics),
    }));

    res.json(formattedCourses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ error: 'Failed to fetch courses', details: err.message });
  }
});
router.get('/api/HomecourseSchedule', async (req, res) => {
  try {
    const sql = 'SELECT * FROM class_schedules ORDER BY id DESC LIMIT 4';
    const result = await exe(sql);
    res.send(result);
  } catch (err) {
    console.error("Error fetching schedules:", err);
    res.status(500).send("Internal server error");
  }
});
router.get('/api/contact-info', async (req, res) => {
  try {
    const sql = 'SELECT * FROM contact_info LIMIT 1'; // assuming one row of contact info
    const result = await exe(sql);
    res.json(result[0]);
  } catch (err) {
    console.error('Error fetching contact info:', err);
    res.status(500).send('Server error');
  }
});



// helper function
function safeParseJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    return [];
  }
}
var path = require("path");




module.exports = router