import React from 'react'

function BoxColor(props) {
    const {
        r,
        g,
        b
    } = props


let myStyles = {
  width: "200px",
  height: 200,
  backgroundColor: `rgb(${r}, ${g}, ${b})`,
  border: "2 solid black"
}


  return (
    <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, width: 100, height: 100,  border: "2 solid black"}} >BoxColor</div>
  )
}


export default BoxColor