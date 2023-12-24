import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

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
      <div
        style={{
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
          width: '100px',
          height: '100px',
          margin: '10px',
        }}
      ></div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => handleColorChange('r', value)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(value) => handleColorChange('g', value)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(value
