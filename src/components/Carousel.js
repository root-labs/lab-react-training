import React, { useState } from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex)=> (prevIndex + 1 ) % images.length)
  };

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} alt="Carousel" />

      <div className="carousel-buttons">
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
