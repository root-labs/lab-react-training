import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(getRandomDiceValue());

  const handleClick = () => {
    setDiceValue('empty');
    setTimeout(() => {
      setDiceValue(getRandomDiceValue());
    }, 1000);
  };

  return (
    <img src={`./assets/images/dice${diceValue}.png`} alt="dice" onClick={handleClick} style={{ cursor: 'pointer' }} />
  );
};

const getRandomDiceValue = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export default Dice;
