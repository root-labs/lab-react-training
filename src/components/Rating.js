import React, { Children } from 'react'

 function Rating(prop) {

    const {rating, children} = prop

console.log(children)
    const stars = () => {
        if (Math.round(children) == 0) {
            return "☆☆☆☆☆"
        } else if (Math.round(children) === 1) {
            return "★☆☆☆☆"
        } else if (Math.round(children) === 2) {
            return "★★☆☆☆"
        } else if (Math.round(children) === 3) {
            return "★★★☆☆"
        } else if (Math.round(children) === 4) {
            return "★★★★☆"
        } else if (Math.round(children) === 5) {
            return "★★★★★"
        } 
    }



  return (
    <div>{stars()}</div>
  )
}


export default Rating