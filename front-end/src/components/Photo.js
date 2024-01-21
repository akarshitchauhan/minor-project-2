// PhotoFrame.js

import React, { useState, useEffect } from 'react';
import './Photo.css';

const Photo = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [photos.length]);

  return (
    <div className="photo-frame">
      <div className="photo-frame-inner">
        <img src={process.env.PUBLIC_URL + photos[currentPhotoIndex]} alt={`Landscape ${currentPhotoIndex + 1}`} />
      </div>
    </div>
  );
};

export default Photo;
