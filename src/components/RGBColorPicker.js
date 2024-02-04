import React, { useState } from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label>{color.toUpperCase()}: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(color, e.target.value)}
        min={0}
        max={255}
      />
    </div>
  );
};

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, newValue) => {
    switch (color) {
      case 'r':
        setRValue(newValue);
        break;
      case 'g':
        setGValue(newValue);
        break;
      case 'b':
        setBValue(newValue);
        break;
      default:
        break;
    }
  };

  const colorStyle = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
    width: '100px',
    height: '100px',
  };

  return (
    <div>
      <div style={colorStyle}></div>
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
    </div>
  );
};

export default RGBColorPicker;
