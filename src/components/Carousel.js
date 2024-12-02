import React, { useState } from 'react';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="flex items-center justify-center m-4 border border-black p-4">
            <button onClick={prevImage} className="absolute left-4 border border-black bg-black text-white p-2 h-10 rounded-lg">Left</button>
            <img src={images[currentIndex]} alt="Carousel" className="w-44 h-44 mx-4" />
            <button onClick={nextImage} className="absolute right-4 border border-black bg-black text-white p-2 h-10 rounded-lg">Right</button>
        </div>
    );
}

export default Carousel;