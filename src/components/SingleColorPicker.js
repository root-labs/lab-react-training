// src/components/SingleColorPicker.js
import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      <label>
        {color.toUpperCase()}:
        <input
          type="number"
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          min={0}
          max={255}
        />
      </label>
    </div>
  );
}

export default SingleColorPicker;
