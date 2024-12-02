import React from 'react';

function NumbersTable({ limit }) {
    const rows = Math.ceil(limit / 6); // Assuming 6 numbers per row
    const numbers = Array.from({ length: limit }, (_, index) => index + 1);

    return (
        <div className="grid grid-cols-5 p-4 text-black">
            {numbers.map((number, index) => (
                <div 
                    key={index} 
                    className={`border border-black p-4 text-center ${index % 2 === 0 ? 'bg-white' : 'bg-red-500'}`}
                >
                    {number}
                </div>
            ))}
        </div>
    );
}

export default NumbersTable;