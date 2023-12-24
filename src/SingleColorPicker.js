import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`${color}-value`}>{color.toUpperCase()}: </label>
      <input
        type="number"
        id={`${color}-value`}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        min={0}
        max={255}
      />
    </div>
  );
};

export default SingleColorPicker;
