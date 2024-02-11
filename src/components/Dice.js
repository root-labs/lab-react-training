import React, { useState } from 'react';

const Dice = () => {
  const [diceImage, setDiceImage] = useState('./assets/images/dice-empty.png');

  const rollDice = () => {
    setDiceImage('./assets/images/dice-empty.png'); // Display empty image
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
      setDiceImage(`./assets/images/dice${randomNumber}.png`); // Display random dice image
    }, 1000);
  };

  return (
    <div onClick={rollDice}>
      <img src={diceImage} alt="Dice" />
    </div>
  );
};

export default Dice;
