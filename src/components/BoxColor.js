
function BoxColor({ r, g, b }) {
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      padding: '10px',
      margin: '10px',
      color: 'white'
    };
  
    return (
      <div style={divStyle}>
        rgb({r}, {g}, {b}) <br />
        #{r.toString(16).padStart(2, '0')}
        {g.toString(16).padStart(2, '0')}
        {b.toString(16).padStart(2, '0')}
      </div>
    );
  }
  
export default BoxColor;