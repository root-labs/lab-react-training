import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle between true and false
  };

  return (
    <img
      src={isClicked ? imgClicked : img}
      alt="Clickable"
      onClick={handleClick}
      className="cursor-pointer w-48 h-48 object-cover"
    />
  );
};

export default ClickablePicture;
