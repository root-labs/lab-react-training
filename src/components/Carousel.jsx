import React, { useState } from "react";
import "./Carousel.css";

export default function Carousel({ images }) {
  //onclick, the arr goes to the next index
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickRight() {
    //if currentIndex is greater than the length of the array
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1); //increase the count
    }
  }

  function handleClickLeft() {
    // if the current index is less than 0
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex + -1); //decrease the count
    }
  }
  let imgSource = images[currentIndex];
  return (
    <div className="carousel">
      <img src={imgSource} alt="imageCarousel"></img>
      <div className="buttons-carousel">
        <button onClick={handleClickRight}>Next</button>
        <button onClick={handleClickLeft}>Prev</button>
      </div>{" "}
    </div>
  );
}
