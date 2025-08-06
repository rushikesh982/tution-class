import { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    course: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          course: "",
          message: "",
        });

        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Error sending message.");
    }
  };

  return (
    <div className="contact-form-section container">
      <h2 className="section-title">📝 Send us a Message</h2>

      {showSuccess && (
        <div className="success-message">
          ✅ Thank you! Your message has been sent successfully. We'll get back
          to you within 24 hours.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="subject">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            className="form-select"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select a subject</option>
            <option value="admission">Admission Inquiry</option>
            <option value="course">Course Information</option>
            <option value="fees">Fee Structure</option>
            <option value="schedule">Class Schedule</option>
            <option value="support">Academic Support</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="course">
            Course of Interest
          </label>
          <select
            id="course"
            name="course"
            className="form-select"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select a course</option>
            <option value="mathematics">Mathematics</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            <option value="computer">Computer Science</option>
            <option value="jee">JEE Preparation</option>
            <option value="neet">NEET Preparation</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            className="form-input form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Please describe your inquiry in detail..."
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
