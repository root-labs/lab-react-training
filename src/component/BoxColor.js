import React from "react";
import "./BoxColor.css";

const rgbToHex = (r, g, b) => {
  const toHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
};

const BoxColor = ({ r, g, b }) => {
 
  const clampedR = Math.max(0, Math.min(255, r));
  const clampedG = Math.max(0, Math.min(255, g));
  const clampedB = Math.max(0, Math.min(255, b));

  
  const rgbColor = `rgb(${clampedR}, ${clampedG}, ${clampedB})`;


  const hexColor = rgbToHex(clampedR, clampedG, clampedB);

 
  const textColor =
    clampedR === 128 && clampedG === 255 && clampedB === 0 ? "black" : "white";

  return (
    <div className="box-color" style={{ backgroundColor: rgbColor }}>
      <p style={{ color: textColor }}>{rgbColor}</p>
      <p style={{ color: textColor }}>{hexColor}</p>
    </div>
  );
};

export default BoxColor;
