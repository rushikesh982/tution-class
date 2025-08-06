import React from 'react';
const ScheduleRow = ({ timeSlot, days, instructor, seats }) => {
  return (
    <>
    <tr>
      <td>
        <div className="time-slot">{timeSlot}</div>
      </td>
      <td>{days}</td>
      <td>
        <div className="instructor">{instructor}</div>
      </td>
      <td>
        <span className="seats">{seats} seats left</span>
      </td>
    </tr>
    </>
  );
};
export default ScheduleRow;
