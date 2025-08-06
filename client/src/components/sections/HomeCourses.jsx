import { useEffect, useState } from "react";
import axios from "axios";

const HomeCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/homecourses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
      });
  }, []);

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-4">Courses Offered</h2>
          <div className="section-divider"></div>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Comprehensive curriculum designed to excel in academics and
            competitive exams
          </p>
        </div>
        <div className="row g-4">
          {courses.map((course, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body text-center p-4">
                  <div className="course-icon fs-1 mb-3">
                    <img src={`http://localhost:1000/images/${course.icon}`} className="img-fluid mb-3" />

                  </div>

                  <h3 className="h5 fw-bold mb-2 text-dark">{course.title}</h3>
                  <p className="text-primary fw-semibold mb-3">
                    {course.grades}
                  </p>
                  <p className="text-muted small">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
