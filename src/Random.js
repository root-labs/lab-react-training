import React from "react";
import "./Random.css"

function Random({min, max}){
    //generating a random integer between min and max
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    
    //rendering component
    return (
        <div className="random">
            <p>Random value between {min} and {max} ={randomValue}</p>
        </div>
    )

}
export default Random;