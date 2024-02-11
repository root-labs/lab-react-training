import React from 'react'

const BoxColor =({r, g, b}) =>{
        const divStyle={
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            width: '200px',
            height: '100px',
            margin: '10px',
            display: 'inline-block',
            border: '1px solid #333',
            textAlign: 'center',
            lineHeight: '100px',
            color: 'white',

           
        };
    

  return (
    <div style={divStyle}>
        rgba({r},{g},{b})
    </div>
  )
}


export default BoxColor;