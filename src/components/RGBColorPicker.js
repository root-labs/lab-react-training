import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rgbValues, setRgbValues] = useState({ r: 0, g: 0, b: 0 });

  const handleColorChange = (color, value) => {
    setRgbValues((prevValues) => ({
      ...prevValues,
      [color]: Number(value),
    }));
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rgbValues.r} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={rgbValues.g} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={rgbValues.b} onChange={handleColorChange} />

      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`,
          marginTop: '20px',
          border: '1px solid black',
        }}
      />
      <p>RGB Color: rgb({rgbValues.r}, {rgbValues.g}, {rgbValues.b})</p>
    </div>
  );
}

export default RGBColorPicker;