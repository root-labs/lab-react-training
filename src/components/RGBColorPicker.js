import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    if (color === 'r') {
      setRValue(value);
    } else if (color === 'g') {
      setGValue(value);
    } else if (color === 'b') {
      setBValue(value);
    }
  };

  const rgbValue = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
      <div style={{display: 'flex'}}>
        <div 
            style={{
                width: '30px',
                height: '30px',
                backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
                marginTop: '10px',
                marginRight: '10px',
                border: '2px solid black',
            }}
        ></div>
        <p style={{float: 'left',width: '140px', height: '30px', marginLeft: '10px', marginTop: '15px'}}>{rgbValue}</p>
        
      </div>
    </div>
  );
};

export default RGBColorPicker;
