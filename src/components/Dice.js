import React, { useState } from 'react';

const Dice = () => {
  // State to keep track of the current dice image
  const [diceImage, setDiceImage] = useState('/img/dice3.png');

  const rollDice = () => {
    // Set the dice to the empty image
    setDiceImage('/img/dice-empty.png');

    // After 1 second, change the image to a random dice image
    setTimeout(() => {
      const randomDiceValue = Math.floor(Math.random() * 6) + 1;
      setDiceImage(`/img/dice${randomDiceValue}.png`);
    }, 1000);
  };

  return (
    <img 
      src={diceImage} 
      alt="dice" 
      onClick={rollDice} 
      style={{ width: '100px', height: '100px', cursor: 'pointer' }} 
    />
  );
};

export default Dice;
