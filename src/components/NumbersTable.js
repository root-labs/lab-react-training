// src/components/NumbersTable.js
import React from 'react';

function NumbersTable({ limit }) {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div>
      {numbers.map(number => (
        <div key={number} style={{ color: number % 2 === 0 ? 'red' : 'black' }}>
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
