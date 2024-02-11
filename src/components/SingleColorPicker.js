import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`${color}Value`}>{color.toUpperCase()}:</label>
      <input
        type="number"
        id={`${color}Value`}
        name={`${color}Value`}
        min={0}
        max={255}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SingleColorPicker;
