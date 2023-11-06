import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {numbers.map((number, index) => (
        <div key={index} style={{ width: '50px', height: '50px', border: '1px solid black', backgroundColor: number % 2 === 0 ? 'red' : 'white' }}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
