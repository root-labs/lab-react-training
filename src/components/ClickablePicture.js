import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <img 
            src={isClicked ? imgClicked : img} 
            alt="Clickable" 
            onClick={() => setIsClicked(!isClicked)} 
            className="cursor-pointer w-44 h-44"
        />
    );
}

export default ClickablePicture;