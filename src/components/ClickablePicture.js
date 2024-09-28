// src/components/ClickablePicture.js
import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img 
      src={isClicked ? imgClicked : img} 
      alt="Clickable" 
      onClick={handleClick} 
      style={{ cursor: 'pointer', width: '200px' }} 
    />
  );
}

export default ClickablePicture;
