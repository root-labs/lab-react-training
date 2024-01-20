import React from "react";

const BoxColor = (props) => {
  const { r, g, b } = props;

  // Ensure r, g, and b are within the valid range (0 to 255)
  const red = Math.min(255, Math.max(0, r));
  const green = Math.min(255, Math.max(0, g));
  const blue = Math.min(255, Math.max(0, b));

  // Create the background color string
  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // Style object with the background color
  const boxStyle = {
    backgroundColor: backgroundColor,
    height: "100px", 
    border:"5px solid #ccc",
    padding: "10px",
    
  };

  return (
    <div className="color" style={boxStyle}>
      <p>{backgroundColor}</p>
    </div>
  );
};

export default BoxColor;
