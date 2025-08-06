import React from "react";
const TimeContact = () => {
  const handleEnroll = () => {
    alert("Enrollment form will open here!");
  };

  return (
    <>
    <div className="contact-section">
      <h2 className="contact-title">Ready to Enroll?</h2>
      <p>
        Contact us to secure your seat or get more information about our
        programs.
      </p>
      <button className="enroll-btn" onClick={handleEnroll}>
        Enroll Now
      </button>
      <div className="contact-info">
        <div className="contact-item">📞 +1 (555) 123-4567</div>
        <div className="contact-item">✉️ info@excellenceacademy.com</div>
        <div className="contact-item">
          📍 123 Education Street, Learning City
        </div>
      </div>
    </div>
    </>
  );
};
export default TimeContact;
