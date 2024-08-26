import React from 'react';
import './NumbersTable.css'; // Make sure to create and import this CSS file

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-table">
      {numbers.map((number) => (
        <div
          key={number}
          className={number % 2 === 0 ? 'number even' : 'number odd'}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;