import React from 'react';
import './Rating.css';

const Rating = ({ children }) => {
  // Ensure the rating is within the valid range (0 to 5)
  const rating = Math.min(Math.max(0, Math.round(children)), 5);

  // Generate an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < rating;
    return isFilled ? '★' : '☆';
  });

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className={star === '★' ? 'filled' : 'empty'}>
          {star}
        </span>
      ))}
    </div>
  );
};

export default Rating;
