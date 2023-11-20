import { useState } from "react";

// Component
import SingleColorPicker from "./singleColorPicker/SingleColorPicker";

function RGBColorPicker() {
  const [rbgPiker, setRgbPiker] = useState({
    rValue: 255,
    gValue: 150,
    bValue: 0,
  });

  const onChange = (value, color) => {
    setRgbPiker((prev) => ({
      ...prev,
      [color]: value,
    }));
  };

  return (
    <div className="rgb-color-picker">
      <SingleColorPicker
        color="rValue"
        value={rbgPiker.rValue}
        onChange={onChange}
      />

      <SingleColorPicker
        color="gValue"
        value={rbgPiker.gValue}
        onChange={onChange}
      />

      <SingleColorPicker
        color="bValue"
        value={rbgPiker.bValue}
        onChange={onChange}
      />
      <div
        className="color-piker-result"
        style={{
          backgroundColor: `rgb(${rbgPiker.rValue},${rbgPiker.gValue},${rbgPiker.bValue})`,
        }}
      ></div>
    </div>
  );
}

export default RGBColorPicker;
