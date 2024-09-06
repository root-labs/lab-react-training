import React, { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

export default function Dice() {
    let dices = [dice1, dice2, dice3, dice4, dice5, dice6];
        
    let style = {
        width: "100px",
    }

  const [diceImg, setDiceImg] = useState(dice1);

    function handleClick() {
      //show the empty dice first
        setDiceImg(emptyDice);

      //set timer to show the random dice after 1sec
    setTimeout(() => {
      const randomDice = dices[Math.floor(Math.random() * dices.length)];
      setDiceImg(randomDice);
    }, 1000);

  }
  return (
    <div>
          <img style={style}        src={diceImg} alt="dice-img" onClick={handleClick}></img>
    </div>
  );
}
