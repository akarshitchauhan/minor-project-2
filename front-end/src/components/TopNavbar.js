import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WishListPopup from "./WishListPopup";

const TopNavbar = () => {
  const phrases = [
    "  What's on your mind today? 🤔",
    "  What are you thinking of studying? 🤔",
    "   What's your area of interest? 🤔",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isWishListOpen, setisWishListOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("Search:", event.target.value);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const userProfile = () => {
    navigate("/user");
  };

  const handleWishlistClick = () => {
    setisWishListOpen(true);
  };

  const handleClosePopup = () => {
    setisWishListOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [phrases.length]); 

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black p-2 flex flex-col sm:flex-row justify-between items-center border border-gray-300 shadow-md">
      <div className="font-serif text-lg font-bold">Your Logo</div>
      <div className="flex items-center mt-2 sm:mt-0">
        <input
          className="mr-2 w-full sm:w-96 h-10 mt-1 px-2 border font-serif rounded-full justify-center items-center text-black border-black hover:border-gray-500"
          type="text"
          placeholder={phrases[currentPhraseIndex]}
          onKeyDown={handleSearch}
        />

        {isLoggedIn ? (
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <button className="px-4 py-2 border-2 font-serif border-blue-700 text-blue-700 rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-700 hover:text-white" onClick={handleWishlistClick}>Wishlist</button>
            <button className="px-4 py-2 border-2 font-serif border-blue-700 bg-blue-700 text-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-900" onClick={userProfile}>
              Profile
            </button>
          </div>
        ) : (
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <button className="px-4 py-2 border-2 font-serif border-blue-700 text-blue-700 rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-700 hover:text-white">Be an instructor!</button>
            <button className="px-4 py-2 border-2 font-serif border-blue-700 bg-blue-700 text-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-900" onClick={handleLogin}>
              Log in / Sign Up
            </button>
          </div>
        )}
      </div>

      {isWishListOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />}
      {isWishListOpen && (
        <WishListPopup
          courses={["Course 1", "Course 2", "Course 3"]} 
          onClose={handleClosePopup}
        />
      )}
    </nav>
  );
};

export default TopNavbar;