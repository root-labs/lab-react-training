import React, { useState } from "react"

 const Dice = ({dice})=>{
    const [index,setIndex] = useState(0)

    function handleClick(){
       const randomDice =   Math.floor(Math.random()*dice.length)

       setIndex(randomDice)
       return randomDice;
    }

    return (
        <img src={dice[index]} alt="" width={200}  onClick={handleClick}/>
    )
 }


 export default Dice