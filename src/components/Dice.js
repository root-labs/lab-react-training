import React, { useState } from 'react'
import dice3 from '../assets/images/dice3.png'
import dice_em from '../assets/images/dice-empty.png'
import dice6 from '../assets/images/dice6.png'
const Dice = () => {
    const [dice, setDice] = useState(dice3);
    function handleClick(){
        setDice(dice_em)
        setTimeout(()=>{
             setDice(dice6)
        },1000)
    }
  return (
    <div>
      <img style={{width:"200px"}} onClick={handleClick} src={dice} alt="" />
    </div>
  )
}
export default Dice