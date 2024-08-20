import { useState } from "react";
import "./RGBColorPicker.css";

function RGBColorPicker() {
  let [rValue, setRValue] = useState(255);
  let [gValue, setGValue] = useState(255);
  let [bValue, setBValue] = useState(255);
  function handleRValue(e) {
    setRValue(e.target.value);
  }
  function handleGValue(e) {
    setGValue(e.target.value);
  }
  function handleBValue(e) {
    setBValue(e.target.value);
  }
  return (
    <div id="color-picker">
      <div className="single-set">
        <div
          className="rgb-box"
          key="r"
          style={{ backgroundColor: `rgb(${rValue},0,0)` }}
        />
        <SingleColorPicker color="r" value={rValue} onChange={handleRValue} />
      </div>

      <div className="single-set">
        <div
          className="rgb-box"
          key="g"
          style={{ backgroundColor: `rgb(0,${gValue},0)` }}
        />
        <SingleColorPicker color="g" value={gValue} onChange={handleGValue} />
      </div>

      <div className="single-set">
        <div
          className="rgb-box"
          key="b"
          style={{ backgroundColor: `rgb(0,0,${bValue})` }}
        />
        <SingleColorPicker color="b" value={bValue} onChange={handleBValue} />
      </div>

      <div className="single-set">
        <div
          className="rgb-box"
          key="rgb"
          style={{ backgroundColor: `rgb(${rValue},${gValue},${bValue})` }}
        />
        <div>{`rgb(${rValue},${gValue},${bValue})`}</div>
      </div>
    </div>
  );
}

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      <label htmlFor={color}>{color.toUpperCase()}: </label>
      <input
        type="number"
        min={0}
        max={255}
        id={color}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default RGBColorPicker;
