import React from 'react';

function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Random value between {min} and {max} =&gt; {randomNumber}
    </div>
  );
}

export default Random;
