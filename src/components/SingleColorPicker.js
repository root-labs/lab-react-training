import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const getColorLabel = (color) => {
    switch (color) {
      case 'r':
        return 'R:';
      case 'g':
        return 'G:';
      case 'b':
        return 'B:';
      default:
        return '';
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: color === 'r' ? `rgb(${value}, 0, 0)`
                        : color === 'g' ? `rgb(0, ${value}, 0)`
                        : `rgb(0, 0, ${value})`,
          border: '1px solid black',
          marginRight: '10px',
        }}
      ></div>
      <label style={{ marginRight: '5px' }}>{getColorLabel(color)}</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SingleColorPicker;
