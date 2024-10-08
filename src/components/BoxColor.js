import React from 'react';

function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    padding: '20px',
    margin: '10px',
    color: 'white',
    textAlign: 'center',
    border: '1px solid black',
  };

  const toHex = (r, g, b) => {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  };

  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b}) <br />
      {toHex(r, g, b)}
    </div>
  );
}

export default BoxColor;
