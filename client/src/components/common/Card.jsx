import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, badge, icon, color, highlights, details }) => {
  return (
    <div className="card">
      <div className={`card-header ${color}`}>
        <div className="card-badge">{badge}</div>
        <div className="card-icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-body">
        <div className="card-highlights">
          <h4>Course Highlights:</h4>
          <ul className="highlight-list">
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card-details">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="detail-item">
              <strong>{key}:</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="btn"
          style={{ width: '100%', background: '#3b82f6', color: 'white' }}
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;