import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
    const [diceValue, setDiceValue] = useState(diceEmpty);

    const rollDice = () => {
        setDiceValue(diceEmpty);
        setTimeout(() => {
            const newValue = Math.floor(Math.random() * 6) + 1;
            switch (newValue) {
                case 1:
                    setDiceValue(dice1);
                    break;
                case 2:
                    setDiceValue(dice2);
                    break;
                case 3:
                    setDiceValue(dice3);
                    break;
                case 4:
                    setDiceValue(dice4);
                    break;
                case 5:
                    setDiceValue(dice5);
                    break;
                case 6:
                    setDiceValue(dice6);
                    break;
                default:
                    break;
            }
        }, 1000);
    };

    return (
        <img 
            src={diceValue} 
            alt="Dice" 
            onClick={rollDice} 
            className="cursor-pointer w-44 h-44 m-2"
        />
    );
}

export default Dice;