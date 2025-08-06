import { useEffect, useState } from "react";
import axios from "axios";

const ContactInfo = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:1000/api/contactinfo")
      .then((res) => setContact(res.data))
      .catch((err) => console.error("Error fetching contact info", err));
  }, []);

  if (!contact) return <p className="text-center">Loading contact info...</p>;

  return (
    <div className="contact-info-section">
      <h2 className="section-title">📋 Contact Information</h2>
      <div className="container-fluid container-md">
        <div className="row">
          {/* Phone Section */}
          <div className="contact-item col-12 col-md-6">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <h3>Phone Numbers</h3>
              <p><strong>Main Office:</strong> <a href={`tel:${contact.phone_main}`}>{contact.phone_main}</a></p>
              <p><strong>Admissions:</strong> <a href={`tel:${contact.phone_admissions}`}>{contact.phone_admissions}</a></p>
              <p><strong>Support:</strong> <a href={`tel:${contact.phone_support}`}>{contact.phone_support}</a></p>
            </div>
          </div>

          {/* Email Section */}
          <div className="contact-item col-12 col-md-6">
            <div className="contact-icon">✉️</div>
            <div className="contact-details">
              <h3>Email Addresses</h3>
              <p><strong>General:</strong> <a href={`mailto:${contact.email_general}`}>{contact.email_general}</a></p>
              <p><strong>Admissions:</strong> <a href={`mailto:${contact.email_admissions}`}>{contact.email_admissions}</a></p>
              <p><strong>Support:</strong> <a href={`mailto:${contact.email_support}`}>{contact.email_support}</a></p>
            </div>
          </div>

          {/* Address Section */}
          <div className="contact-item col-12 col-md-6">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <h3>Address</h3>
              <p><strong>Excellence Academy</strong></p>
              <p>{contact.address_line1}</p>
              <p>{contact.address_line2}</p>
              <p>{contact.city}, {contact.state} {contact.zipcode}</p>
              <p>{contact.country}</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="contact-item col-12 col-md-6">
            <div className="contact-icon">🌐</div>
            <div className="contact-details">
              <h3>Social Media</h3>
              <p><strong>Facebook:</strong> <a href="#" target="_blank">{contact.facebook}</a></p>
              <p><strong>Instagram:</strong> <a href="#" target="_blank">{contact.instagram}</a></p>
              <p><strong>LinkedIn:</strong> <a href="#" target="_blank">{contact.linkedin}</a></p>
              <p><strong>YouTube:</strong> <a href="#" target="_blank">{contact.youtube}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
