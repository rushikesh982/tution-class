import React from "react";
import ScheduleRow from "./ScheduleRow";
const TimeCourses = ({ course }) => {
  return (
    <div className="course-section">
      <div className={`course-header ${course.colorClass}`}>
        <h2 className="course-title">
          {course.icon} {course.name}
        </h2>
        <p className="course-description">{course.description}</p>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Days</th>
            <th>Instructor</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {course.schedules.map((schedule, index) => (
            <ScheduleRow
              key={index}
              timeSlot={schedule.timeSlot}
              days={schedule.days}
              instructor={schedule.instructor}
              seats={schedule.seats}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TimeCourses;
