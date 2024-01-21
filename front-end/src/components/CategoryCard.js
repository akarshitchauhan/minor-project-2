// CategoryCard.js

import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} className="category-image" />
      <div className="category-details">
        <h3 className="category-name">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
