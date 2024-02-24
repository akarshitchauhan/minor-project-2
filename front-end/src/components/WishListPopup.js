import React from "react";

const WishListPopup = ({ courses, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 border border-gray-300 shadow-lg z-50 w-full sm:w-auto">
        <h2 className="text-center">Wishlist Courses</h2>
        <ul className="overflow-auto max-h-64">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <button className="mt-2 px-4 py-2 cursor-pointer" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WishListPopup;