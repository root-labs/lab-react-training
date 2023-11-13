import React, { useState } from 'react';

const empty = './assets/images/dice-empty.png';

const images = [
  './assets/images/dice1.png',
  './assets/images/dice2.png',
  './assets/images/dice3.png',
  './assets/images/dice4.png',
  './assets/images/dice5.png',
  './assets/images/dice6.png',
];



function Dice() {
  const [diceImage, setDiceImage] = useState(empty);

  const handleClick = () => {
    setDiceImage(empty);

    setTimeout(() => {
      
      setDiceImage( images[Math.floor(Math.random() * images.length)]);
    }, 1000);
  };

  return (
    <div onClick={handleClick}>
      <img className="smaller" src={diceImage} alt="Dice" />
    </div>
  );
}

export default Dice;
