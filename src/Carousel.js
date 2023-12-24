import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={handlePrevClick}>Left</button>
      <img src={images[currentImageIndex]} alt={`Carousel Image ${currentImageIndex}`} />
      <button onClick={handleNextClick}>Right</button>
    </div>
  );
};

export default Carousel;
