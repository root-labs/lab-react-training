import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
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
  
    return (
      <div  >
          <div  style={{
            backgroundColor: `rgb(${rValue},0,0})`,
            width: '50px',
            height: '50px',
            margin: '20px 0',
          }}>
        <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
        </div>
        <div  style={{
            backgroundColor: `rgb(0,${gValue},0)`,
            width: '50px',
            height: '50px',
            margin: '20px 0',
          }}>
        <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
        </div>
        <div  style={{
            backgroundColor: `rgb(0,0,${bValue})`,
            width: '50px',
            height: '50px',
            margin: '20px 0',
          }}>
        <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
        </div>
        <div
          style={{
            backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
            width: '50px',
            height: '50px',
            margin: '20px 0',
          }}
        >rgb(${rValue},${gValue},${bValue})</div>
      </div>
    );
  }
  
  export default RGBColorPicker;