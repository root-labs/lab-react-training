import React, { useState } from 'react'

function NumbersTable(props) {
    const {limit} = props


let numArr = Array.from({length: limit}, (_, i) => i + 1)



  return (

    <div>

      {
            numArr.map((num) => {
              return <div style={{ 
                width: 30, 
                height: 30, 
                backgroundColor: "red" }}>
                    {num}
              </div>
            })
          }

    </div>
  )
}

export default NumbersTable