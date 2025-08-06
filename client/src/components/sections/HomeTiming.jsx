import { useEffect, useState } from "react";
import axios from "axios";

const HomeTiming = () => {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/HomecourseSchedule")
      .then((res) => {
        setBatches(res.data);
      })
      .catch((err) => {
        console.error("Error fetching batch timings:", err);
      });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-4">Batch Timings</h2>
          <div className="section-divider"></div>
          <p className="lead text-muted">
            Flexible timing options to suit your schedule
          </p>
        </div>

        <div className="row g-4">
          {batches.map((batch, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-lg border-0 card-hover">
                <div className="card-body text-center p-4">
                  <h3 className="batch-type mb-2">{batch.heading}</h3>
                  <div className="batch-time mb-3">{batch.time_slot}</div>
                  <p className="text-muted small mb-0">{batch.subject}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-muted mb-4">
            Can't find a suitable time? We offer flexible scheduling!
          </p>
          <button className="btn btn-primary-custom btn-lg">
            Contact for Custom Timing
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeTiming;
