import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="clickable-picture">
      <img
        src={clicked ? imgClicked : img}
        alt="clickable"
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;
