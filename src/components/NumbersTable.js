import React from 'react';

function NumbersTable({ limit }) {
  const numbersArray = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {numbersArray.map((number) => (
        <div
          key={number}
          style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: number % 2 === 0 ? 'red' : 'white',
            border: '1px solid black',
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;