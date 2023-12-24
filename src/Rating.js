import React from 'react';

const Rating = ({ children }) => {
  const roundedRating = Math.round(children);
  const fullStars = '★'.repeat(roundedRating);
  const emptyStars = '☆'.repeat(5 - roundedRating);

  return (
    <div className="rating">
      {fullStars}
      {emptyStars}
    </div>
  );
};

export default Rating;
