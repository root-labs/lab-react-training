import React from 'react';
import './Rating.css';

const Rating = ({ children, isDriverCard }) => {
  const roundedRating = Math.round(children);
  const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);

  const textColor = isDriverCard ? 'white' : 'black'; // Conditionally set the text color
  const textAlign = isDriverCard ? 'left' : 'center'; // Conditionally set the text-align

  return (
    <div className="rating" style={{ color: textColor, textAlign: textAlign }}>
      {stars}
    </div>
  );
};

export default Rating;