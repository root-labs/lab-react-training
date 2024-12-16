import React from "react";

function BoxColor({ r, g, b }) {
  const color = `rgb(${r}, ${g}, ${b})`;
  const hexColor = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  return (
    <div style={{ backgroundColor: color, padding: "20px", margin: "10px" }}>
      <p>RGB: {color}</p>
      <p>Hex: {hexColor}</p>
    </div>
  );
}

export default BoxColor;
