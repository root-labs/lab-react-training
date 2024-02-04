import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <button onClick={handlePrevClick}>Left</button>
      <img src={images[currentImageIndex]} alt={`carousel-img-${currentImageIndex}`} />
      <button onClick={handleNextClick}>Right</button>
    </div>
  );
};

export default Carousel;
