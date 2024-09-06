import React, {useState} from 'react'

export default function LikeButton() {
    let colors = [
        "red",
        "yellow",
        "green",
        "blue",
        "violet",
        "orange",
        "pink",
        "brown",
        "gray",

    ]
   
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red"); // Initial color

//function to generate random color
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
//change color with every click & add count with every click
     function increaseLikeCount() {
        setCount(count + 1);
        setColor(getRandomColor());
    }
//set color as bgcolor
    let style = {
        backgroundColor: color,
        height: "2rem",
        borderRadius: "10px",
        color: "white",
        border: "none",
        padding: "15px",
        alignItems: "center",
        display: "flex",
    }

    // function resetButton(){
    //     setCount(0);
    // }
   


  return (
      <div className=''>
           <button style={style} onClick={increaseLikeCount}>{count} Likes</button>
    {/* <button onClick={resetButton}>Reset</button> */}
    </div>
  )
}

