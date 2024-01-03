import React from 'react'

const Rating = ({children}) => {
  // Round the number to the nearest integer to determine the number of filled stars
  const filledStars = Math.round(children);

  // Create an array to hold the stars based on the rounded number
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < filledStars ? 'filled' : 'empty'}>
      ★
    </span>
  ));

  return <div className="rating">{stars}</div>;

}

export default Rating