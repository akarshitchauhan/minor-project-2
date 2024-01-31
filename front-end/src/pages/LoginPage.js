import React, { useState } from "react";

const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  const handleFormToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLoginButtonClick = () => {
    setIsLoginClicked(true);
    setIsSignupClicked(false);
  };

  const handleSignupButtonClick = () => {
    setIsLoginClicked(false);
    setIsSignupClicked(true);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-blue-800 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-8">Website Name</h1>
        <img src="/images/login.gif" alt="Logo" className="w-96 rounded-full" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-0">
        <div className="flex flex-col justify-center items-center w-full sm:w-3/4 lg:w-1/2">
          <div className="flex justify-between mb-8">
            <span
              className={`text-3xl cursor-pointer ${isLoginClicked ? "text-blue-800" : "text-gray-500"}`}
              onClick={() => {
                handleLoginButtonClick();
                handleFormToggle();
              }}
            >
              Log In
            </span>
            <div className="border-l-2 border-gray-300 h-12 mx-10"></div>
            <span
              className={`text-3xl cursor-pointer ${isSignupClicked ? "text-blue-800" : "text-gray-500"}`}
              onClick={() => {
                handleSignupButtonClick();
                handleFormToggle();
              }}
            >
              Sign Up
            </span>
          </div>
          <div className="border-b-2 border-blue-600 w-3/4 mb-8"></div>
          {/* Your login/signup form components go here */}
          {isLoginForm ? (
            <div>
              <div className="text-xl mb-4">Email/Phone No. :</div>
              <div className="mb-4">
                <input
                  className="border border-gray-300 rounded-full py-2 px-4 w-72 hover:border-gray-500"
                  type="text"
                  placeholder="Enter email/phone no."
                />
              </div>
              <div className="text-xl mb-4">Password :</div>
              <div className="mb-4">
                <input
                  className="border border-gray-300 rounded-full py-2 px-4 w-72 hover:border-gray-500"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="flex justify-center">
                <button className="border-2 border-blue-700 text-blue-700 rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-700 hover:text-white py-2 px-8 mb-4">Log In</button>
              </div>
              <div className="flex justify-center">
                <img src="/images/google.png" alt="Logo" className="w-48 hover:translate hover:scale-110 hover:shadow-l transform transition-all duration-200" />
              </div>
            </div>
          ) : (
            <div>
              <div className="overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-transparent">
                <div className="text-xl mb-4">Full Name :</div>
                <div className="mb-4">
                  <input
                    className="border border-gray-300 rounded-full py-2 px-4 w-72 hover:border-gray-500"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="text-xl mb-4">Email :</div>
                <div className="mb-4">
                  <input
                    className="border border-gray-300 rounded-full py-2 px-4 w-72 hover:border-gray-500"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="text-xl mb-4">Phone No. :</div>
                <div className="mb-4">
                  <input
                    className="border border-gray-300 rounded-full py-2 px-4 w-72 hover:border-gray-500"
                    type="number"
                    placeholder="Enter your phone no."
                  />
                </div>
                <div className="text-xl mb-4">Password :</div>
                <div className="mb-4">
                  <input
                    className="border border-gray-300 rounded-full py-2 px-4 w-72 hover:border-gray-500"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="text-xl mb-4">Re-type password :</div>
                <div className="mb-4">
                  <input
                    className="border border-gray-300 rounded-full py-2 px-4 w-72 hover:border-gray-500"
                    type="password"
                    placeholder="Re-type your password"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="border-2 border-blue-700 text-blue-700 rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-700 hover:text-white py-2 px-8 mb-4">Sign Up</button>
              </div>
              <div className="flex justify-center">
                <img src="/images/google.png" alt="Logo" className="w-48 hover:translate hover:scale-110 hover:shadow-l transform transition-all duration-200" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;