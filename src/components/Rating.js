import React from "react";

function Rating({ children }) {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  return (
    <div>
      {'★'.repeat(filledStars)}{'☆'.repeat(emptyStars)}
    </div>
  );
}

export default Rating;
