import React from 'react';
import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="numbers-table">
      {numbers.map((number) => (
        <div
          key={number}
          className={number % 2 === 0 ? 'even' : 'odd'}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
