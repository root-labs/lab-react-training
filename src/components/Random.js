import React from 'react'
import "./Random.css";

const Random = ({min , max}) => {
    const randnum = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div class="random">
        <p>Random Value between {min} and {max} => {randnum} </p>
        
    </div>
  )
}

export default Random