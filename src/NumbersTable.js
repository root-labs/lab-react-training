import React from "react";
import "./NumbersTable.css"

const NumbersTable = ({limit}) => {
    //generating an array of numbers from 1 to the specified limit
    const numbers = Array.from({length:limit}, (_,index) => index +1)

    return (
        <div className="numbers-table">
          {numbers.map((number) => (
            <div
              key={number}
              className={`number-cell ${number % 2 === 0 ? "even" : ""}`}
            >
              {number}
            </div>
          ))}
        </div>
      );
}
export default NumbersTable;