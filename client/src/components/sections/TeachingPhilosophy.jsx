import React, { useEffect, useState } from "react";
import axios from "axios";

const TeachingPhilosophy = () => {
  const [philosophies, setPhilosophies] = useState([]);

  useEffect(() => {
    const fetchPhilosophies = async () => {
      try {
        const res = await axios.get("http://localhost:1000/api/educational-features");

        // Log the actual response to debug structure
        console.log("API Response:", res.data);

        // If the response is wrapped inside an object with `data` key
        const fetchedData = Array.isArray(res.data)
          ? res.data
          : res.data.data || [];

        setPhilosophies(fetchedData);
      } catch (err) {
        console.error("Error fetching teaching philosophies:", err);
      }
    };

    fetchPhilosophies();
  }, []);

  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">📚 Our Teaching Philosophy</h2>
        <p className="section-subtitle">
          The principles that guide our educational approach
        </p>
      </div>
      <div className="section-content">
        <div className="philosophy-grid">
          {Array.isArray(philosophies) && philosophies.length > 0 ? (
            philosophies.map((philosophy) => (
              <div key={philosophy.id} className="philosophy-card">
                <img
                  src={`http://localhost:1000/images/${philosophy.icon}`}
                  alt={philosophy.title}
                  className="philosophy-icon"
                  style={{ width: "60px", height: "60px", objectFit: "contain" }}
                />
                <h3 className="philosophy-title">{philosophy.title}</h3>
                <p className="philosophy-text">{philosophy.description}</p>
              </div>
            ))
          ) : (
            <p>Loading or no philosophy data available...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeachingPhilosophy;
