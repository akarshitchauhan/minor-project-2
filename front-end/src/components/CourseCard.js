import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="w-full sm:w-72 rounded-xl overflow-hidden m-4 ml-5 mr-2 inline-block h-auto sm:h-80 hover:translate hover:scale-110 hover:shadow-md transform transition-all duration-200">
      <img src={course.image} alt={course.title} className="w-full h-36 border border-gray-300 rounded object-cover" />
      <div className="p-4 h-auto sm:h-48">
        <h3 className="text-lg mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{course.description}</p>
        <p className="text-xs text-gray-700 mb-2">Instructor: {course.instructor}</p>
        <button className="px-3 py-1 border border-blue-700 rounded-full mr-7 ml-2 cursor-pointer text-white bg-blue-700 transition-colors duration-200 hover:bg-blue-900">Enroll Now</button>
        <button className="px-3 py-1 border border-blue-700 text-blue-700 rounded-full ml-7 cursor-pointer bg-white transition-colors duration-200 hover:bg-blue-900 hover:text-white">Wishlist</button>
      </div>
    </div>
  );
};

export default CourseCard;