import React, { useState } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <button onClick={goLeft}>Left</button>
      <img src={images[currentIndex]} alt="carousel" style={{ width: "300px", height: "300px" }} />
      <button onClick={goRight}>Right</button>
    </div>
  );
}

export default Carousel;
