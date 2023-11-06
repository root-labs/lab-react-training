import React from 'react';

class BoxColor extends React.Component {
  render() {
    const { r, g, b } = this.props;
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      width: '200px',
      height: '200px'
    };

    // Convert RGB to Hex
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

    return (
      <div style={divStyle}>
        rgb({r}, {g}, {b}) <br/>
        {hexColor}
      </div>
    );
  }
}

export default BoxColor;
