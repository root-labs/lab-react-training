// src/components/BoxColor.js
import React from 'react';

function BoxColor({ r, g, b }) {
  const color = `rgb(${r}, ${g}, ${b})`;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  return (
    <div style={{
      backgroundColor: color,
      padding: '20px',
      margin: '10px',
      color: 'white'
    }}>
      {hex}
    </div>
  );
}

export default BoxColor;
