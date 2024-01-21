// CourseCard.js

import React from 'react';
import './CourseCard.css'; // Import the CSS file for styling

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-details">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <p className="course-instructor">Instructor: {course.instructor}</p>
        <button className="course-enroll-button">Enroll Now</button>
        <button className="course-wishlist-button">Wishlist</button>
      </div>
    </div>
  );
};

export default CourseCard;
