import React, { useEffect, useState } from 'react';
import BatchTimingBanner from '../sections/BatchTimingBanner';
import '../css/BatchTiming.css';
import TimeContact from '../sections/TimeContact';
import TimeCourses from '../sections/TimeCourses';
import axios from 'axios'; // ✅ Make sure axios is installed

const Timings = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:1000/api/courseSchedule') // ✅ Your actual backend URL/port
      .then((response) => {
        // Group the schedules by subject
        const grouped = groupBySubject(response.data);
        setCourseData(grouped);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // 🔁 Helper function to group schedules by subject
  const groupBySubject = (data) => {
    const result = {};
    data.forEach(item => {
      if (!result[item.subject]) {
        result[item.subject] = {
          name: item.subject,
          icon: "📘", // You can customize icon based on subject
          description: item.heading || "Course description",
          colorClass: item.subject.toLowerCase().replace(/\s+/g, '-'),
          schedules: []
        };
      }
      result[item.subject].schedules.push({
        timeSlot: item.time_slot,
        days: item.days,
        instructor: item.instructors,
        seats: item.seats_left
      });
    });
    return Object.values(result);
  };

  return (
    <>
      <BatchTimingBanner />
      <div className="batch-timings-container">
        {loading ? (
          <p>Loading...</p>
        ) : courseData.length > 0 ? (
          courseData.map((course, index) => (
            <TimeCourses key={index} course={course} />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
      <TimeContact />
    </>
  );
};

export default Timings;
