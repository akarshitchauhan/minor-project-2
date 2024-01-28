import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  const handleGoogleLogin = () => {
    // Handle Google login functionality
  };

  const handleFormToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLoginButtonClick = () => {
    setIsLoginClicked(true);
    setIsSignupClicked(false);
    // Add your login functionality here
  };

  const handleSignupButtonClick = () => {
    setIsLoginClicked(false);
    setIsSignupClicked(true);
    // Add your signup functionality here
  };

  return (
    <div className="container">
      <div className="leftSide">
        <h1 className="heading">Website Name</h1>
        <img src="/images/login.gif" alt="Logo" className="logo" />
      </div>
      <div className="rightSide">
        <div className="innerRight">
          <div className="sideBySide">
            <span
              className={`formHeading ${isLoginClicked ? "clickedlogin" : ""}`}
              onClick={() => {
                handleLoginButtonClick();
                handleFormToggle();
              }}
            >
              Log In
            </span>
            <div className="line"></div>
            <span
              className={`formHeading ${
                isSignupClicked ? "clickedsignup" : ""
              }`}
              onClick={() => {
                handleSignupButtonClick();
                handleFormToggle();
              }}
            >
              Sign Up
            </span>
          </div>
          <div className="lineBelow"></div>
          {/* Your login/signup form components go here */}

          {isLoginForm ? (
            <div>
              <div className="heading">Email/Phone No. : </div>
              <div className="searchbar">
                <input
                  className="searchbox"
                  type="text"
                  placeholder="Enter email/phone no."
                />
              </div>
              <div className="heading">Password : </div>
              <div className="searchbar">
                <input
                  className="searchbox"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="buttoncnt">
                <button className="button">Log In</button>
              </div>
              <div className="buttoncnt">
                <img src="/images/google.png" alt="Logo" className="google" />
              </div>
            </div>
          ) : (
            <div>
              <div className="signup-inner">
                <div className="heading">Full Name : </div>
                <div className="searchbar">
                  <input
                    className="searchbox"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="heading">Email : </div>
                <div className="searchbar">
                  <input
                    className="searchbox"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="heading">Phone No. : </div>
                <div className="searchbar">
                  <input
                    className="searchbox"
                    type="number"
                    placeholder="Enter your phone no."
                  />
                </div>
                <div className="heading">Password : </div>
                <div className="searchbar">
                  <input
                    className="searchbox"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="heading">Re-type password : </div>
                <div className="searchbar">
                  <input
                    className="searchbox"
                    type="password"
                    placeholder="Re-type your password"
                  />
                </div>
              </div> 
              <div className="buttoncnt">
                <button className="button">Sign Up</button>
              </div>
              <div className="buttoncnt">
                <img src="/images/google.png" alt="Logo" className="google" />
              </div>
            </div>
          )}

          {/* <form>
            <div className="formGroup">
              <label htmlFor="emailPhone">Email/Phone No:</label>
              <input
                type="text"
                id="emailPhone"
                name="emailPhone"
                placeholder="Enter your email/phone"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="loginButton">
              {isLoginForm ? "Log In" : "Sign Up"}
            </button>
            <button
              type="button"
              className="googleLoginButton"
              onClick={handleGoogleLogin}
            >
              {isLoginForm ? "Log In" : "Sign Up"} with Google
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
