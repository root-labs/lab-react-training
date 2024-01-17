import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleRightClick = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
};

export default Carousel;
