import React from 'react';

export default function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  }; //inline style to pass it down as style and cleaner code

  return (
    <div style={divStyle}>
      <p>rgb({r}, {g}, {b})</p>
    </div>
  );
}
