import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IdContext } from "..";

const InstructorDashboard = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(IdContext);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend when component mounts
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/instructor/${userId}`,{withCredentials:true});
      setCourses(response.data.courses);
      console.log(response.data.courses)
      const response2 = await axios.get(
        `http://localhost:4000/course/${response.data.courses[1]}`
        
      );
      console.log(response2.data)
      setCourses(response2.data)
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleNav = () => {
    navigate("/teach");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-900 text-white p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Bits and Bytes</h1>
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav>
          <ul>
            <li className="py-2">
              <a
                href="#"
                className="flex items-center text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Dashboard
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="flex items-center text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Courses
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="flex items-center text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Settings
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="flex items-center text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-100 p-8">
        <div className="bg-white rounded-md p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
          <p className="text-gray-700">
            Here you can manage your courses, view analytics, and more.
          </p>
        </div>
        <div className="mt-8">
          <button
            className="px-4 py-2 border-2 border-blue-700 bg-blue-700 text-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-900 hover:border-blue-900 shadow-[0_0px_6px_2px_rgba(0,0,0,0.3)] shadow-blue-700 hover:shadow-[0_0px_6px_3px_rgba(0,0,0,0.3)] hover:shadow-blue-900"
            onClick={handleNav}
          >
            Add new course!
          </button>
        </div>
        {/* Display courses ahuja */}
        <div>
          <h1>{courses.courseTitle}</h1>
          <h1>{courses.coursePrice}</h1>
          <h1>{courses.courseInfo}</h1>
        </div>
        {/* Display courses */}
        {/* <div className="mt-8">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="bg-white rounded-md p-6 shadow-md mt-4">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-700">{course.description}</p>
              </div>
            ))
          ) : (
            <p className="mt-4 text-gray-700">No courses available.</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default InstructorDashboard;
