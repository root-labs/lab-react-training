import React from 'react';
import "./NumbersTable.css";

const NumbersTable = ({ limit }) => {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="numbers-table">
      {numbers.map((number, index) => (
        <div key={index} className={number % 2 === 0 ? 'even' : 'odd'}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
