import React, { useState } from 'react';

const Dice = () => {
  const diceImages = [
    './assets/images/dice1.png',
    './assets/images/dice2.png',
    './assets/images/dice3.png',
    './assets/images/dice4.png',
    './assets/images/dice5.png',
    './assets/images/dice6.png',
  ];

  const [currentDice, setCurrentDice] = useState(diceImages[0]); // Start with the first dice image

  const handleClick = () => {
    // Show the empty dice image
    setCurrentDice('./assets/images/dice-empty.png');

    // After 1 second, show a random dice image
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentDice(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <img
      src={currentDice}
      alt="Dice"
      onClick={handleClick}
      className="cursor-pointer w-24 h-24 object-contain"
    />
  );
};

export default Dice;
