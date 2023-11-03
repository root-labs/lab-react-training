import React from 'react';
import './../App.css';

function NumbersTable ({ limit }) {
  
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className='flexitagain' >
      {numbers.map((number,index)=>(
        <li key={index} className={number % 2 === 0  ? 'red' : 'blue' }>{number}</li>
      ))}
    </div>
  );
}

export default NumbersTable ;
