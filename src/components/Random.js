import React from "react";

function Random(props){
    return(
        <div className="random-container">
            <h3>Random Value between {props.min} and {props.max} = {Math.floor(Math.random() * (props.max - props.min))+ props.min}</h3>
        </div>
    );
}

export default Random;