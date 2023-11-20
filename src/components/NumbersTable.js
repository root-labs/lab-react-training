import React from 'react';

const NumbersTable = ({ limit }) => {
  // Generate an array of numbers from 1 to the limit
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {numbers.map((number) => (
        <div 
            key={number} 
            style={{ 
                background: number % 2 === 0 ? 'red' : 'white', 
                padding: '10px', 
                width: '30px',
                height: '30px',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
