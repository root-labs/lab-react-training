import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => setRValue(value)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(value) => setGValue(value)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(value) => setBValue(value)}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'rgb(${rValue},${gValue},${bValue})',
          marginTop: '10px',
        }}
      ></div>
    </div>
  );
};

export default RGBColorPicker;
