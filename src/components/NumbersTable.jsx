import React from 'react'

export default function NumbersTable({ limit }) {
    
let countList = []
    for (let i = 1; i < limit; i++){
    countList.push(i);
    }
  return (
      <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
      }}>
          {countList.map((number)=>(
              <div
                  key={number}
                  style={{
                      background: number % 2 === 0 ? "red" : "white",
                      padding: "20px",
                      border: "1px solid black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      
                     
              }}>{number}</div>
          ))}
          
    </div>
  )
}
