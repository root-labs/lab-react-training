import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({images}) => {
    const[currentImage, setCurrentImage] =  useState(0);

    const handlePrevClick = () => {
        setCurrentImage((prevImage)=> (prevImage === 0 ? images.length -1 : prevImage -1))
    };

    const handleNextClick = () => {

        setCurrentImage((prevImage)=> (prevImage === images.length -1  ? 0 :prevImage + 1));

    }

    return(
        <div className="carousel">
        <button onClick={handlePrevClick}>Left</button>
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`}/>
        <button onClick={handleNextClick}>Right</button>

        </div>
    )

    

}
export default Carousel;