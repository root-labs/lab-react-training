import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const rgbValue = `rgb(${r}, ${g}, ${b})`;
  const hexValue = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  const boxStyle = {
    backgroundColor: rgbValue,
    width: '200px',
    height: '100px',
    border: '1px solid #000',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="box-color" style={boxStyle}>
      <p>
        RGB: {rgbValue} <br />
        Hex: {hexValue}
      </p>
    </div>
  );
};

export default BoxColor;
