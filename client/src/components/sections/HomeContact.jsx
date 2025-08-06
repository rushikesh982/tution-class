import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeContact = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/contact-info")
      .then((res) => setContact(res.data))
      .catch((err) => console.error("Error fetching contact info", err));
  }, []);

  if (!contact) return null;

  return (
    <section className="py-5 bg-dark-custom text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4">Get In Touch</h2>
          <div
            className="section-divider"
            style={{ backgroundColor: "#6f42c1" }}
          ></div>
          <p className="lead text-muted-light">
            Ready to start your academic journey? Contact us today!
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="contact-icon">📍</div>
            <h3 className="h5 fw-bold mb-3">Address</h3>
            <p className="text-muted-light small">
              {contact.address_line1}
              <br />
              {contact.address_line2}
              <br />
              {contact.city}
              <br />
              {contact.country}
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="contact-icon">📞</div>
            <h3 className="h5 fw-bold mb-3">Phone</h3>
            <p className="text-muted-light small">
              {contact.phone_main}
              <br />
              {contact.phone_admissions}
              <br />
              {contact.phone_support}
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="contact-icon">✉️</div>
            <h3 className="h5 fw-bold mb-3">Email</h3>
            <p className="text-muted-light small">
              {contact.email_general}
              <br />
              {contact.email_admissions}
              <br />
              {contact.email_support}
              
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="contact-icon">🕒</div>
            <h3 className="h5 fw-bold mb-3">Youtoube</h3>
            <p className="text-muted-light small">
              {contact.youtube}
              <br />
              {contact.hours_weekend}
            </p>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-primary-custom btn-lg me-3 mb-2">
            Schedule a Visit
          </button>
          <button className="btn btn-outline-light btn-lg mb-2">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
