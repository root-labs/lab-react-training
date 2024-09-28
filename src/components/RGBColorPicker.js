// src/components/RGBColorPicker.js
import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div>
      <div style={{ width: '100px', height: '100px', backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}></div>
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />
    </div>
  );
}

export default RGBColorPicker;
