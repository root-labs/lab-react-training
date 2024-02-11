import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPreviousSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <button onClick={goToPreviousSlide}>Left</button>
      <img src={images[currentIndex]} alt="Slide" />
      <button onClick={goToNextSlide}>Right</button>
    </div>
  );
};

export default Carousel;
