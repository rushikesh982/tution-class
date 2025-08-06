const CourseCard = ({ course }) => {
 
  return (
    <div className="col-lg-6 mb-5">
      <div className="card course-card shadow-lg card-hover h-100">
        <div className="course-header">
          <div className="course-icon">
            <img src="http://localhost:1000/api/courses/images/<%= course.icon %>" alt="Course Icon" width="50" />

          </div>
          <h3 className="course-title">{course.title}</h3>
          <p className="course-subtitle mb-0">{course.subtitle}</p>
        </div>
        <div className="course-body">
          <div className="price-badge">{course.price}</div>

          <div className="course-description">
            <p className="mb-0">{course.description}</p>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="info-item">
                <span className="info-icon">⏱️</span>
                <div>
                  <span className="info-label">Duration:</span>
                  <span className="info-value">{course.duration}</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-item">
                <span className="info-icon">🎓</span>
                <div>
                  <span className="info-label">Eligibility:</span>
                  <span className="info-value">{course.eligibility}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="info-item">
                <span className="info-icon">👥</span>
                <div>
                  <span className="info-label">Batch Size:</span>
                  <span className="info-value">{course.batchSize}</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-item">
                <span className="info-icon">📅</span>
                <div>
                  <span className="info-label">Schedule:</span>
                  <span className="info-value">{course.schedule}</span>
                </div>
              </div>
            </div>
          </div>

          <h5 className="fw-bold mb-3">Topics Covered:</h5>
          <ul className="topics-list mb-4">
            {course.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>

          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-primary-custom flex-fill">
              Enroll Now
            </button>
            <button className="btn btn-outline-custom flex-fill">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
