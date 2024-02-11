import React from 'react';

const Rating = ({ children }) => {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  return (
    <div className="rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star">★</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star">☆</span>
      ))}
    </div>
  );
};

export default Rating;
