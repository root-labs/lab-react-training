import React, { useState } from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(color, event.target.value);
  };

  return (
    <div>
      <label>{color.toUpperCase()}:</label>
      <input type="number" min="0" max="255" value={value} onChange={handleInputChange} />
    </div>
  );
};

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    switch (color) {
      case 'r':
        setRValue(value);
        break;
      case 'g':
        setGValue(value);
        break;
      case 'b':
        setBValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
      <div style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`, width: '100px', height: '100px' }}></div>
    </div>
  );
};

export default RGBColorPicker;
