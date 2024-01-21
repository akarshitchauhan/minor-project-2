// TextDisplay.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './TextDisplay.css'; // Import the CSS file

const TextDisplay = () => {
  return (
    <div className="text-display">
      <TypeAnimation
        sequence={[
          'Explore Endless Possibilities 😉 ',
          1000,
          'Choose from 1 Million+ Courses! ',
          1000,
          'Dive into Expert-Led Learning! ',
          1000,
          'Expand your career opportunities! ',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="type-animation-wrapper" // Apply the styles using className
        repeat={Infinity}
      />
    </div>
  );
};

export default TextDisplay;
