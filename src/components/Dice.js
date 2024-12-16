import React, { useState } from "react";

function Dice() {
  const [diceValue, setDiceValue] = useState(null);
  const diceImages = [
    './assets/images/dice-empty.png',
    './assets/images/dice1.png',
    './assets/images/dice2.png',
    './assets/images/dice3.png',
    './assets/images/dice4.png',
    './assets/images/dice5.png',
    './assets/images/dice6.png',
  ];

  const handleClick = () => {
    setDiceValue(diceImages[0]);

    setTimeout(() => {
      setDiceValue(diceImages[Math.floor(Math.random() * 6) + 1]);
    }, 1000);
  };

  return (
    <img
      src={diceValue || diceImages[0]}
      alt="Dice"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default Dice;
