import React, { useState } from 'react';

function Dice() {
  const diceImages = [
    './assets/dice1.png',
    './assets/dice2.png',
    './assets/dice3.png',
    './assets/dice4.png',
    './assets/dice5.png',
    './assets/dice6.png',
  ];
  const [currentImage, setCurrentImage] = useState(diceImages[0]);

  const handleClick = () => {
    setCurrentImage('./assets/images/dice-empty.png');
    setTimeout(() => {
      const randomImage = diceImages[Math.floor(Math.random() * diceImages.length)];
      setCurrentImage(randomImage);
    }, 1000);
  };

  return (
    <img
      src={currentImage}
      alt="Dice"
      onClick={handleClick}
      style={{ cursor: 'pointer', width: '100px', height: '100px' }}
    />
  );
}

export default Dice;
    