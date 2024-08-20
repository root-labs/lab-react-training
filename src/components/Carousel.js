import { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  let imgArray = [...images];
  const [pic, setPic] = useState(0);
  function handleLeftClick() {
    if (pic === 0) {
      setPic(imgArray.length - 1);
    } else {
      setPic(pic - 1);
    }
  }
  function handleRightClick() {
    if (pic === imgArray.length - 1) {
      setPic(0);
    } else {
      setPic(pic + 1);
    }
  }
  return (
    <div id="carousel">
      <button onClick={handleLeftClick}>Left</button>
      <img src={imgArray[pic]} alt="carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;
