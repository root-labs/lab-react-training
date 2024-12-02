import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="border border-black p-4">
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(newValue) => setRValue(newValue)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(newValue) => setGValue(newValue)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(newValue) => setBValue(newValue)}
      />

      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
            marginRight: "10px",
            border: "1px solid black",
          }}
        ></div>
        <p>rgb({rValue}, {gValue}, {bValue})</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;
