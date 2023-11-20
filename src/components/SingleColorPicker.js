import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const colorBoxStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: color === 'r' ? `rgb(${value}, 0, 0)` : color === 'g' ? `rgb(0, ${value}, 0)` : `rgb(0, 0, ${value})`,
    display: 'inline-block',
    marginRight: '10px',
    border: '2px solid black'
  };

  return (
    <div style={{display: 'flex', marginBottom: '10px'}}>
      <div style={colorBoxStyle}></div>
      <label htmlFor={`${color}Value`}>{color.toUpperCase()}:</label>
      <input
        type="number"
        id={`${color}Value`}
        value={value}
        onChange={(e) => onChange(color, e.target.value)}
        min="0"
        max="255"
      />
    </div>
  );
};

export default SingleColorPicker;
