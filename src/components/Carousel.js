import React from "react";
import { useState } from "react";

function Carousel(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const leftHandler = () => {
        setCurrentSlide((prevSlide) => prevSlide === 0 ? props.images.length - 1 : prevSlide - 1);
    }

    const rightHandler = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % props.images.length);
    }
    return (
        <div className="carousel-container">
            <button onClick={leftHandler}>left</button>
            <div>
                <img src={props.images[currentSlide]} alt="" />
            </div>
            <button onClick={rightHandler}>Right</button>
        </div>
    )
}

export default Carousel;