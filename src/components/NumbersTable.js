import React from 'react';
import './NumbersTable.css';

export default function NumbersTable(props) {

    const numbers = Array.from({ length: props.limit }, (_, index) => index + 1);

    return (
        <div className='numbersTable'>
            {numbers.map((number) => (
                <div key={number} className={number % 2 === 0 ? 'even block' : 'odd block'}>
                    {number}
                </div>
            ))}
        </div>
    )
}
