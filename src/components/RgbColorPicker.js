import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0); // Red value
  const [gValue, setGValue] = useState(0); // Green value
  const [bValue, setBValue] = useState(0); // Blue value

  const rgbStyle = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
  };

  return (
    <div className="p-4">
      {/* Individual color pickers */}
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />

      {/* Final RGB color preview */}
      <div className="flex items-center mt-4">
        <div
          className="w-12 h-12 rounded"
          style={rgbStyle}
        ></div>
        <p className="ml-4 font-bold">rgb({rValue}, {gValue}, {bValue})</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;
