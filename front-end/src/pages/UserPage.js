import React, { useState, useEffect } from "react";
import TopNavbar from "../components/TopNavbar";
import BottomComponent from "../components/BottomComponent";
import UserBasics from "../components/user-page/UserBasics";
import UserPhoto from "../components/user-page/UserPhoto";
import UserPasswordChange from "../components/user-page/UserPasswordChange";
import UserCourses from "../components/user-page/UserCourses";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("basics");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pt-16">
        <TopNavbar />
      </div>
      <div className="flex h-screen bg-gray-100">
        <div className="w-1/4 bg-blue-800 text-white p-8 rounded-xl shadow-2xl">
          <div className="mb-4">
            <div className="w-24 h-24 flex flex-col items-center rounded-full overflow-hidden border-2 border-white">
              <img
                src='/images/person.jpg'
                alt="User Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold mb-4">
            Akarshit Chauhan
          </h2>
          <ul>
            <li
              className={`cursor-pointer py-2 ${
                activeTab === "basics" &&
                "bg-blue-500 font-serif rounded-full p-4 max-w-60 translate-x-0 scale-110 shadow-md"
              }`}
              onClick={() => handleTabClick("basics")}
            >
              Basics
            </li>
            <li
              className={`cursor-pointer py-2 ${
                activeTab === "photo" &&
                "bg-blue-500 font-serif rounded-full p-4 max-w-60 translate-x-0 scale-110 shadow-md"
              }`}
              onClick={() => handleTabClick("photo")}
            >
              Photo
            </li>
            <li
              className={`cursor-pointer py-2 ${
                activeTab === "myCourses" &&
                "bg-blue-500 font-serif rounded-full p-4 max-w-60 translate-x-0 scale-110 shadow-md"
              }`}
              onClick={() => handleTabClick("myCourses")}
            >
              My Courses
            </li>
            <li
              className={`cursor-pointer py-2 ${
                activeTab === "security" &&
                "bg-blue-500 font-serif rounded-full p-4 max-w-60 translate-x-0 scale-110 shadow-md"
              }`}
              onClick={() => handleTabClick("security")}
            >
              Security
            </li>
            <li
              className={`cursor-pointer py-2 ${
                activeTab === "deleteAccount" &&
                "bg-red-500 font-serif rounded-full p-4 max-w-60 translate-x-0 scale-110 shadow-md"
              }`}
              onClick={() => handleTabClick("deleteAccount")}
            >
              Delete Account
            </li>
          </ul>
        </div>

        <div className="w-3/4 p-8 ml-16">
          {activeTab === "basics" && (
            <UserBasics />
          )}
          {activeTab === "photo" && (
            <UserPhoto />
          )}
          {activeTab === "photo" && (
            <UserCourses />
          )}
          {activeTab === "security" && (
            <UserPasswordChange />
          )}
          {activeTab === "deleteAccount" && (
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Delete Account</h2>
              <h2 className="text-xl font-serif mb-4">Remeber you won't be able to fetch your account back if deleted!</h2>

              <button
                  type="submit"
                  className="px-4 py-2 mt-2 border-2 font-serif border-red-500 bg-red-500 text-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-red-700 hover:border-red-700"
                >
                  Delete Account
                </button>
            </div>
          )}
        </div>
      </div>
      <BottomComponent />
    </div>
  );
};

export default UserPage;
