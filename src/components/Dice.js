// src/components/Dice.js
import React, { useState } from 'react';

function Dice() {
  const [dice, setDice] = useState('./assets/images/dice-empty.png');

  const rollDice = () => {
    setDice('./assets/images/dice-empty.png');
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDice(`./assets/images/dice${randomValue}.png`);
    }, 1000);
  };

  return (
    <img 
      src={dice} 
      alt="Dice" 
      onClick={rollDice} 
      style={{ cursor: 'pointer', width: '100px' }} 
    />
  );
}

export default Dice;
