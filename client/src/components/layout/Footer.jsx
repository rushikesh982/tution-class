import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Footer.css'; // Assuming you have a CSS file for styling the Footer component
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Excellence Academy</h3>
            <p>
              Empowering students to achieve academic excellence through
              personalized learning and expert guidance.
            </p>
            <div className="social-icons">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
              <a href="#">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/timings">Batch Timings</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Courses</h4>
            <ul>
              <li><a href="#">Mathematics</a></li>
              <li><a href="#">Science</a></li>
              <li><a href="#">English</a></li>
              <li><Link to="/courses">All Courses</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📍 123 Education Street</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@excellenceacademy.com</li>
              <li>🕒 Mon-Fri: 8AM-8PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Excellence Academy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
