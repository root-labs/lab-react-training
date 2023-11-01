import React from 'react';

function BoxColor(props) {
    const backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`;
    const boxStyle = {
        width: '100%', 
        height: '100px', 
        backgroundColor: backgroundColor,
        border : '1px solid black ',
        
    };

    return (
        <div style={boxStyle}>
           
        </div>
    );
}

export default BoxColor;
