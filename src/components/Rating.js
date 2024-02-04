import React from 'react';

const Rating = ({ children }) => {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  return (
    <div className="rating" style={{ fontSize:'30px'}}>
      {'★'.repeat(filledStars)}
      {'☆'.repeat(emptyStars)}
    </div>
  );
};

export default Rating;
