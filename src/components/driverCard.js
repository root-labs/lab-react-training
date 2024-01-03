import React from "react";
import Rating from "./rating";

const DriverCard = ({name,rating,img,car})=>{
    return(
        <div className="driver">
        <img src={img} alt={name} />
        <div className="driver-details">

          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
        </div>
    )
}


export  default DriverCard;