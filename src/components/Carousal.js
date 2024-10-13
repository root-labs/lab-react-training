import React, { useState } from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handleLeftClick}>Left</button>
      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{ width: '100px', height: '100px', margin: '0 10px' }}
      />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;