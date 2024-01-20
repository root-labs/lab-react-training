import React, { useState, useEffect } from "react";

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    // Display empty dice image
    setDiceValue(null);

    // After 1 second, display a new random dice image
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
    }, 1000);
  };

  return (
    <div>
      <img
        src={
          diceValue
            ? `./assets/images/dice${diceValue}.png`
            : "./assets/images/dice-empty.png"
        }
        alt="Dice"
        onClick={rollDice}
      />
    </div>
  );
};

export default Dice;
