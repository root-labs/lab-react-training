import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setDiceValue(null);

    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div onClick={!isRolling ? rollDice : null} style={{ cursor: 'pointer' }}>
      {isRolling ? (
        <img
          src="./assets/images/dice-empty.png"
          alt="Empty Dice"
          style={{ width: '100px', height: '100px' }}
        />
      ) : (
        <img
          src={`./assets/images/dice${diceValue || '1'}.png`}
          alt={`Dice ${diceValue}`}
          style={{ width: '100px', height: '100px' }}
        />
      )}
    </div>
  );
};

export default Dice;
