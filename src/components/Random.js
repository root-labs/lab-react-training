import React from "react";
import './Random.css';

const Random = ({ min, max }) => {
    const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
  
    return (
      <div className="random">
        <p>
          Random value between {min} and {max} =&gt; {randomValue}
        </p>
      </div>
    );
};
  
export default Random;