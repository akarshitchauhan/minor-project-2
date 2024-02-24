import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="w-full sm:w-64 overflow-hidden rounded-xl m-4 ml-1 sm:ml-12 mr-2 inline-block h-auto sm:h-64 hover:translate hover:scale-110 hover:shadow-md transform transition-all duration-200">
      <img src={category.image} alt={category.name} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg mb-2 text-center text-gray-800">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;