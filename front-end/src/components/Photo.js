import React, { useState, useEffect } from 'react';

const Photo = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [photos.length]);

  return (
    <div className="flex justify-center items-center h-1/2">
      <div className="w-full overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + photos[currentPhotoIndex]}
          alt={`Landscape ${currentPhotoIndex + 1}`}
          className="w-full h-60 object-cover transition-transform duration-800 ease-in-out transform hover:translate-x-[-20px] hover:scale-110"
        />
        {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base text-center">
          <TextDisplay />
        </div> */}
      </div>
    </div>
  );
};

export default Photo;