import React, { useState } from 'react';

import './Dice.css';

import dice1 from './../assets/images/dice1.png';
import dice2 from './../assets/images/dice2.png';
import dice3 from './../assets/images/dice3.png';
import dice4 from './../assets/images/dice4.png';
import dice5 from './../assets/images/dice5.png';
import dice6 from './../assets/images/dice6.png';
import diceEmpty from './../assets/images/dice-empty.png';

import { getRandomElement } from './Utility';

export default function Dice() {

    const dice = [dice1, dice2, dice3, dice4, dice5, dice6];

    let [diceDisplay, setDiceDisplay] = useState(getRandomElement(dice));

    function changeDice() {
        setDiceDisplay(diceEmpty);
        setTimeout(() => {
            setDiceDisplay(getRandomElement(dice));
        }, 1000)
    }

    return (
        <img className="die" src={diceDisplay} onClick={changeDice}/>
    )
}
