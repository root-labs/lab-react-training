// src/components/Carousel.js
import React, { useState } from 'react';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={prevImage}>Left</button>
      <img src={images[index]} alt="Carousel" style={{ width: '200px' }} />
      <button onClick={nextImage}>Right</button>
    </div>
  );
}

export default Carousel;
