import { useEffect, useState } from "react";
import axios from "axios";

const AboutHistory = () => {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1000/api/about-history")
      .then(res => setMilestones(res.data))
      .catch(err => console.error("Error fetching history:", err));
  }, []);

  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">📖 Our Journey</h2>
        <p className="section-subtitle">
          25 years of educational excellence and continuous growth
        </p>
      </div>
      <div className="section-content">
        <div className="timeline">
          {milestones.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
