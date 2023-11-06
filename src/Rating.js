import React from 'react';

const Rating = ({ children }) => {
  const starsTotal = 5;
  const rating = Math.round(children);
  return (
    <div>
      {'★'.repeat(rating)}
      {'☆'.repeat(starsTotal - rating)}
    </div>
  );
};

export default Rating;
