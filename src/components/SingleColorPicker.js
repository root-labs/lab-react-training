import React from "react";

const SingleColorPicker = ({ color, value, onChange }) => {
  const colorMap = {
    r: "red",
    g: "green",
    b: "blue",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: colorMap[color],
          marginRight: "10px",
          border: "1px solid black",
        }}
      ></div>
      <label>
        {color.toUpperCase()}:{" "}
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SingleColorPicker;
