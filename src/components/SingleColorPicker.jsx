import React from 'react';

export default function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      <label>{color}</label>
      <input
        type="number"
        value={value}
        min="0"
        max="255"
        onChange={onChange} // Trigger parent onChange function with new value
      />
    </div>
  );
}
