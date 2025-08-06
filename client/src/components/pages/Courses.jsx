import React from 'react';
import CallToAction from '../sections/CallToAction';
import CoursesList from '../sections/CourseList';
import CoursesBanner from "../sections/CoursesBanner";
import '../css/Courses.css';


const Courses = () => {
  return (
    <>
    <CoursesBanner />
      <CoursesList/>
      <CallToAction/>
    </>
  );
};

export default Courses;



