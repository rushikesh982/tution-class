import React from "react";
import '../../assets/css/Featured.css';

export default function Featured() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why Choose Excellence Academy?</h2>
        <div className="grid grid-4">
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3 className="feature-title">Expert Teachers</h3>
            <p className="feature-description">
              Qualified educators with 15+ years experience
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Comprehensive Courses</h3>
            <p className="feature-description">
              Math, Science, English for all grade levels
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3 className="feature-title">Flexible Timings</h3>
            <p className="feature-description">
              Morning, evening, and weekend batches
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3 className="feature-title">Proven Results</h3>
            <p className="feature-description">
              95% student success rate in exams
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="#"
            onClick={() => console.log("Redirect to About Page")}
            className="btn"
            style={{ background: "#4f46e5", color: "white" }}
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
