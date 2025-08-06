import { useEffect, useState } from "react";
import axios from "axios";

const FounderBio = () => {
  const [founder, setFounder] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:1000/api/founderBio")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setFounder(res.data[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching founder bio:", err);
      });
  }, []);

  if (!founder) return <div>Loading...</div>;

  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">👨‍🎓 Meet Our Founder</h2>
        <p className="section-subtitle">
          The visionary behind Excellence Academy
        </p>
      </div>
      <div className="section-content">
        <div className="founder-grid">
          <div className="founder-image">
            👨‍🏫
          </div>
          <div className="founder-info">
            <h3>{founder.name}</h3>
            <p className="founder-title">{founder.title}</p>
            <div className="founder-bio">
              <p>{founder.bio_paragraph1}</p>
              <p>{founder.bio_paragraph2}</p>
              <p>{founder.bio_paragraph3}</p>
            </div>
            <div className="founder-stats">
              <div className="stat-item">
                <span className="stat-number">{founder.years_experience}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {Number(founder.students_taught).toLocaleString()}+
                </span>
                <span className="stat-label">Students Taught</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {Number(founder.top_rankers).toLocaleString()}+
                </span>
                <span className="stat-label">Top Rankers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{founder.books_authored}</span>
                <span className="stat-label">Books Authored</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderBio;
