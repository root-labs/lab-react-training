import React from 'react'

export default function Rating({children}) {
  
    const roundedRating = Math.round(children);
    const stars = [];

    for (let i = 0; i < 5; i++) { // we loop to fill the array with either the following conditions
        if (i < roundedRating) { //check if i matches the number given or is smaller than.
            stars.push(<span key={i}>★</span>) // thats a filled star
        } else {
            stars.push(<span key={i}>☆</span>) // span pushes on that index, an empty star
        }
    }
    return (
        <div>{stars}</div>
  )
}
