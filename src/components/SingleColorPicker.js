import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const colorStyle = {
    backgroundColor:
      color === 'r' ? `rgb(${value}, 0, 0)` :
      color === 'g' ? `rgb(0, ${value}, 0)` :
      `rgb(0, 0, ${value})`,
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      {/* Color preview */}
      <div
        className="w-12 h-12 rounded"
        style={colorStyle}
      ></div>

      {/* Input field */}
      <div className="flex items-center">
        <label className="mr-2 font-bold">{color.toUpperCase()}:</label>
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-20 p-1 border rounded"
        />
      </div>
    </div>
  );
};

export default SingleColorPicker;
