import React from 'react';

function Random(props) {
    const interval = props.max - props.min + 1;
    const randomNumber = Math.floor(Math.random() * interval) + props.min;

    return (
       
    <div className="big">
        
         Random Value between {props.min} and {props.max}=> {randomNumber}</div>
    );
}

export default Random;
