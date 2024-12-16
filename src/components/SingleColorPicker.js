import React from "react";

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      <label>{color.toUpperCase()}</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(color, e.target.value)}
      />
    </div>
  );
}

export default SingleColorPicker;
