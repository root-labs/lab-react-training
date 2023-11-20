import { useState } from "react";

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    /* For the first image, go to the last image */
    // if (currentImage === 0) {
    //   setCurrentImage(images.length - 1);
    // } else {
    //   setCurrentImage(currentImage - 1);
    // }

    // stop when we reach the first image
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    /* For the last image, go to the first image */
    // if (currentImage === images.length - 1) {
    //   setCurrentImage(0);
    // } else {
    //   setCurrentImage(currentImage + 1);

    // stop when we reach the last image
    if (currentImage < images.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick} disabled={currentImage === 0}>
        Prev
      </button>
      <img src={images[currentImage]} alt="carousel" />
      <button
        onClick={handleNextClick}
        disabled={currentImage === images.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
