import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";


const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
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
        break;
    }
  };

  const rgbColor = `rgb(${rValue},${gValue},${bValue})`;

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: rgbColor,
          border: "1px solid black",
        }}
      ></div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={handleColorChange}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={handleColorChange}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default RGBColorPicker;
