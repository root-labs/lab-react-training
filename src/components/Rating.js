import React from 'react';

const Rating = ({ children }) => {
  // Round the rating value to the nearest whole number
  const roundedRating = Math.round(children);

  // Generate stars based on the rounded rating
  const stars = Array(5)
    .fill('☆')
    .map((star, index) => (index < roundedRating ? '★' : star));

  return (
    <div className="text-yellow-500 text-2xl font-bold">
      {stars.join('')}
    </div>
  );
};

export default Rating;
