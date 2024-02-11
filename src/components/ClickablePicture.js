import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log('Click event triggered');
    setIsClicked(!isClicked);
  };

  console.log('img:', img);
  console.log('imgClicked:', imgClicked);

  return (
    <img
      src={isClicked ? imgClicked : img}
      alt=""
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ClickablePicture;
