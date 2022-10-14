import React from 'react'


 function DriverCard(props) {

    const {name, rating, img, car} = props


    const stars = () => {
        if (Math.round(rating) == 0) {
            return "☆☆☆☆☆"
        } else if (Math.round(rating) === 1) {
            return "★☆☆☆☆"
        } else if (Math.round(rating) === 2) {
            return "★★☆☆☆"
        } else if (Math.round(rating) === 3) {
            return "★★★☆☆"
        } else if (Math.round(rating) === 4) {
            return "★★★★☆"
        } else if (Math.round(rating) === 5) {
            return "★★★★★"
        } 
    }





  return (
    <div>
    <img style={{height: "100px"}} src={img} alt="passed"></img>
        {name}
        {stars()}
        {car.model} {car.licensePlate}

    </div>
  )
}



export default DriverCard