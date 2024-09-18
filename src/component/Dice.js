import React, { useState } from "react";


const Dice = () => {
  // State to keep track of the current dice image
  const imagePath = require('../assets/images/dice3.png');
  const [diceImage, setDiceImage] = useState(imagePath);

  const rollDice = () => {
    const emptyImage = require('../assets/images/dice-empty.png')
    setDiceImage(emptyImage);

    // After 1 second, change the image to a random dice image
    setTimeout(() => {
        const randomDiceValue = Math.floor(Math.random() * 6) + 1;
        const randomImage = require(`../assets/images/dice${randomDiceValue}.png`);
      setDiceImage(randomImage);
    }, 1000);
  };

  return (
    <img
      src={diceImage}
      alt="dice"
      onClick={rollDice}
      style={{ width: "100px", height: "100px", cursor: "pointer" }}
    />
  );
};

export default Dice;
