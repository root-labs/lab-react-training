import React from "react";

const BoxColor = (props) => {
    const {r, g, b} = props;
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;
    const hexColor = `#${[r, g, b].map(val => val.toString(16).padStart(2, '0')).join('')}`;

    const divStyle = {
        backgroundColor: backgroundColor,
        color: r + g + b > 382 ? '#000' : '#fff', // Simple brightness check
        textAlign: 'center',
        padding: '20px'
    };

    return (
        <div style={divStyle} className="box">
            <p>{backgroundColor}</p>
            <p>{hexColor}</p>
        </div>
    )
}

export default BoxColor;