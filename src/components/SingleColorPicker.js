import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div style={{ margin: '10px 0' }}>
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(color, e.target.value)}
        style={{ marginLeft: '10px', width: '50px' }}
      />
    </div>
  );
}

export default SingleColorPicker;
    