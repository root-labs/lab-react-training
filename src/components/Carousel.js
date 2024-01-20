import React, { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel (props) {

    const images = props.images;
    let [index, setIndex] = useState(0);
    let [image, setImage] = useState(images[index]);

    useEffect(() => {
        // Update the image whenever the index changes
        setImage(images[index]);
    }, [index, images]);

    function leftShift() {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    function rightShift() {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    // function leftShift() {
    //     //shift the array left
    //     setIndex((prevIndex) => {
    //         if(prevIndex === 0){
    //             return images.length - 1;
    //         }
    //         else{
    //             return prevIndex - 1;
    //         }
    //     })

    //     setImage(images[index]);
    // }

    // function rightShift() {
    //     //shift the array right
    //     setIndex((prevIndex) => {
    //         if(prevIndex === images.length - 1){
    //             return 0;
    //         }
    //         else{
    //             return prevIndex + 1;
    //         }
    //     })

    //     setImage(images[index]);
    // }

    return (
        <div className='carousel'>
            <button className='button' onClick={leftShift}>Left</button>
            <img src={image} className='image' />
            <button className='button' onClick={rightShift}>Right</button>
        </div>
    )
}
