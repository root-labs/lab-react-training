import React from 'react'

const BoxColor = ({r,g,b}) => {
    const divStyle ={
        backgroundColor:`rgb(${r},${g},${b})`,
        height:'40px',
        border:'1px solid black'
    }
  return (
    <div className='color' >
        <p style={divStyle}>rgb({r},{g},{b})</p>

    </div>
  )
}

export default BoxColor
