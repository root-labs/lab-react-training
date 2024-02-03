import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

import React from 'react';

function Dice()
{
    const [img, throwDice]=React.useState(dice0)
    setInterval(change,1000)
    function change()
    {
        let n=parseInt(Math.random()*6)
        switch(n)
        {
            case 0:
                throwDice(dice0)
                break;
            case 1:
                throwDice(dice1)
                break;
            case 2:
                throwDice(dice2)
                break;
            case 3:
                throwDice(dice3)
                break;
            case 4:
                throwDice(dice4)
                break;
            case 5:
                throwDice(dice5)
                break;
            default :
                throwDice(dice6)
                break;
        }
    }
    return <div> <img src={img} alt='dice' style={{width:'100px'}}/> </div>
}

export default Dice