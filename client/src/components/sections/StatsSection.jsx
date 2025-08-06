import React from "react";
import '../../assets/css/StatsSection.css'; // Assuming you have a CSS file for styling the StatsSection component

export default function StatsSection() {
    return (
        <>
        <section className="stats">
        <div className="container">
          <div className="grid grid-4">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Taught</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Core Subjects</div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}