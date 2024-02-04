import React, { useState, useEffect } from 'react';

const Dice = () => {
  const [diceImage, setDiceImage] = useState('./assets/images/dice1.png');

  const handleClick = () => {
    setDiceImage('./assets/images/dice-empty.png');
    setTimeout(() => {
      const randomDiceValue = Math.floor(Math.random() * 6) + 1;
      setDiceImage(`./assets/images/dice${randomDiceValue}.png`);
    }, 1000);
  };

  return (
    <img
      src={diceImage}
      alt="Dice"
      style={{ width: '200px', height: '200px', cursor: 'pointer' }}
      onClick={handleClick}
    />
  );
};

export default Dice;
