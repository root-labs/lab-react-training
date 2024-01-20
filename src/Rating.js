// Rating.js

import React from "react";
import "./Rating.css";

const Rating = ({ children }) => {
  const maxStars = 5;
  const filledStars = Math.round(children);

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={index < filledStars ? "filled" : ""}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
