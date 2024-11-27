import React from "react";
import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
    const diceImages = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const [dice, setDice] = useState(diceImages[randomNumber]);

    const handleClick = () => {
        setTimeout(() => {
            setDice(diceImages[Math.floor(Math.random() * 6) + 1]);
        }, 1000);
        setDice(diceEmpty);
    }
    return (
        <div className="dice-container">
            <img src={dice} alt="Dice" onClick={handleClick} className="dice-img" />
        </div>
    )
}

export default Dice;