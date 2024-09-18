import React from 'react'
import './Rating.css'

const Ratings = ({ children, isDriverCard }) => {
  const roundedRating = Math.round(children);
  const stars = "★".repeat(roundedRating) + "☆".repeat(5 - roundedRating);

  const textColor = isDriverCard ? "white" : "black";
  const textAlign = isDriverCard ? "left" : "center"; 
  return <div className="rating" style={{color: textColor, textAlign: textAlign}}>{stars}</div>;
}

export default Ratings