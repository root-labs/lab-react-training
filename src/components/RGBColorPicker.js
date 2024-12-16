import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    if (color === "r") setRValue(value);
    if (color === "g") setGValue(value);
    if (color === "b") setBValue(value);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
          width: "100px",
          height: "100px",
          marginBottom: "10px",
        }}
      ></div>
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />
    </div>
  );
}

export default RGBColorPicker;
