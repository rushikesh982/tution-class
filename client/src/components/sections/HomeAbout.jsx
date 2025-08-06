import { useEffect, useState } from "react";
import axios from "axios";

const HomeAbout = () => {
  const [aboutData, setAboutData] = useState(null);
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1000/api/home_about")
      .then((res) => {
        setAboutData(res.data.about);
        setReasons(res.data.reasons);
      })
      .catch((err) => {
        console.error("Error fetching about data:", err);
      });
  }, []);

  if (!aboutData) return <div className="text-center py-5">Loading...</div>;

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-4">
            About Excellence Academy
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="lead text-muted mb-4">{aboutData.description}</p>
            <div className="row text-center">
              <div className="col-6">
                <div className="stats-number">{aboutData.students_taught}+</div>
                <div className="text-muted">Students Taught</div>
              </div>
              <div className="col-6">
                <div className="stats-number">{aboutData.success_rate}%</div>
                <div className="text-muted">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4">
                <h3 className="h4 fw-bold mb-4 text-dark">Why Choose Us?</h3>
                <ul className="list-unstyled">
                  {reasons.map((item, index) => (
                    <li className="d-flex align-items-center mb-3" key={index}>
                      <span
                        className="bg-primary rounded-circle me-3"
                        style={{ width: "8px", height: "8px" }}
                      ></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
