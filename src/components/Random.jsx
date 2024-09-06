import React, { useState, useEffect } from 'react';

export default function Random({ min, max }) {
    const [randomNumber, setRandomNumber] = useState(null);

    //use effect to not make changes with the same numbers
    useEffect(() => {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(number);
    }, [min, max]); // Depend on min and max to recalculate if they change

    return (
        <div className='randomNumber'>
            <p>Random Value between {min} and {max} {" => "} {randomNumber}</p>
        </div>
    );
}
