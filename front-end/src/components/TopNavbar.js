// TopNavbar.js

import React, { useState, useEffect } from 'react';
import './TopNavbar.css';

const TopNavbar = () => {
  const phrases = ["What's on your mind today? 🤔", "What are you thinking of studying? 🤔", "What's your area of interest? 🤔"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Implement your search logic here
      console.log('Search:', event.target.value);
      // You can replace the console.log with your actual search functionality
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [phrases.length]); // Include phrases.length in the dependency array

  return (
    <nav className="top-navbar">
      <div className="logo">Your Logo</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder={phrases[currentPhraseIndex]}
          onKeyDown={handleSearch}
        />
      </div>
      <div className="button-cont">
        <a href="https://">Be an instructor!</a>
        <button className="login-button">Log in</button>
        <button className="signup-button">Sign up</button>
      </div>
    </nav>
  );
};

export default TopNavbar;
