import React, { useState } from "react";

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
    />
  );
}

export default ClickablePicture;
