import { useState } from "react";
export default function Carousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , margin: '15px', padding: '5px'}}>
            <div>
                <button style={{  width: '100px', height: '40px',fontSize:'1.2em', margin: '5px', padding: '5px', backgroundColor: 'green',color:'white', borderRadius: '10px' }} onClick={goToPreviousImage}>Left</button>
            </div>
            <img src={images[currentImageIndex]} alt="carousel" style={{ width: '300px', height: '350px' }} />
            <div>
                <button style={{ width: '100px', height: '40px',fontSize:'1.2em', margin: '5px', padding: '5px', backgroundColor: 'green',color:'white', borderRadius: '10px'}} onClick={goToNextImage}>Right</button>
            </div>
        </div>
    );
}