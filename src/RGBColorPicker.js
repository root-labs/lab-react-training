// RGBColorPicker.js
import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    // Implement the logic to update the state based on the color
    switch (color) {
      case "r":
        setRValue(value);
        break;
      case "g":
        setGValue(value);
        break;
      case "b":
        setBValue(value);
        break;
      default:
        // Handle default case
    }
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
      {/* Additional components or UI as needed */}
    </div>
  );
};

export default RGBColorPicker;
