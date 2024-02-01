import React from 'react';

const BottomComponent = () => {
  return (
    <div className="bg-white text-black p-2 flex justify-between items-center border border-gray-300 shadow-md">
      <p>This is the bottom component. Add your content here.</p>
      <button className="bg-white text-gray-800 px-3 py-1 border border-black rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-200">Click me</button>
    </div>
  );
};

export default BottomComponent;