import { Link } from 'react-router-dom';
import '../../assets/css/CoursesSection.css';

const CoursesSection = () => {
  return (
    <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Courses</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Mathematics</h5>
                  <p className="card-text">Clear concepts, formulas, and problem solving techniques.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Science</h5>
                  <p className="card-text">Physics, Chemistry, Biology with real-world applications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">English</h5>
                  <p className="card-text">Grammar, Vocabulary, Reading Comprehension, Writing Skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default CoursesSection;