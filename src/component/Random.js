import React from 'react'
import './Random.css'

function Random(props) {

    const {min, max} = props;

    const r = Math.floor(Math.random()*max + min);
  return <div className="random">Random Value between {min} and {max} → {r}</div>;
}

export default Random