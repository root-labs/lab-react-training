import React from 'react'

function BoxColor(props) {
    const {
        r,
        g,
        b
    } = props



  return (
    <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}} >BoxColor</div>
  )
}


export default BoxColor