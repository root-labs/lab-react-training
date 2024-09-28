// src/components/Random.js
import React from 'react';

function Random({ min, max }) {
  // Calculate a random number between min and max
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      Random value between {min} and {max} ={randomNumber}
    </div>
  );
}

export default Random;
