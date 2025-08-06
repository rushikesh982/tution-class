import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ You missed this line

  useEffect(() => {
    axios.get("http://localhost:1000/api/courses")
      .then((res) => {
        const formattedCourses = res.data.map((course) => ({
          ...course,
          topics: typeof course.topics === 'string'
            ? course.topics.trim().startsWith("[")
              ? JSON.parse(course.topics)
              : course.topics.split(',').map(t => t.trim())
            : [],
        }));
        setCourses(formattedCourses);
        // console.log("Course Icon:", course.icon);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading courses...</p>;

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
