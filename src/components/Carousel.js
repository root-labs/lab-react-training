import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button">Left</button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button onClick={goToNext} className="carousel-button">Right</button>
    </div>
  );
};

export default Carousel;