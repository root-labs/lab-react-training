import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    if (!isRolling) {
      setIsRolling(true);
      // Display empty dice immediately
      setDiceValue(0);

      // After 1 second, roll the dice and display the result
      setTimeout(() => {
        const newDiceValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newDiceValue);
        setIsRolling(false);
      }, 1000);
    }
  };

  return (
    <img
      src={`./assets/images/dice${isRolling ? '-empty' : ''}${diceValue}.png`}
      alt={`Dice ${diceValue}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Dice;
