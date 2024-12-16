import React from "react";

function NumbersTable({ limit }) {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div>
      {numbers.map((number) => (
        <div key={number} style={{ color: number % 2 === 0 ? "red" : "black" }}>
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
