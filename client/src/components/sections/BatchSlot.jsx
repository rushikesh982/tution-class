const BatchSlot = ({ time, instructor, seats, type }) => {
  return (
    <div className={`batch-slot batch-${type}`}>
      <div className="batch-time">{time}</div>
      <div className="batch-info">
        <div className="instructor-name">{instructor}</div>
        <div className="seats-available">{seats} seats left</div>
      </div>
    </div>
  );
};
export default BatchSlot;