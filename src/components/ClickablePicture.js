import { useState } from 'react';
export default function ClickablePicture({ img, imgClicked }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <img
            src={isClicked ? imgClicked : img}
            alt="Clickable"
            style={{ cursor: 'pointer', width: '200px', height: 'auto' }}
            onClick={handleClick}
        />
    );
}
