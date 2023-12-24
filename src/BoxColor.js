import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: getContrastColor(r, g, b),
  };

  return (
    <div style={boxStyle}>
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
    </div>
  );
};

// Helper function to determine text color based on background color
const getContrastColor = (r, g, b) => {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? 'black' : 'white';
};

export default BoxColor;
