import React from "react";
import Rating from "./Rating";
const DriverCard = (props) => {
    const {name, rating, img, car} = props;

    return (
       <div className="driver-card">
        <img src={img} alt="" /> 
        <div className="driver-content">
            <h2>{name}</h2>
            <Rating>{rating}</Rating>
            <p>{car.model + ' - ' + car.licensePlate}</p>
        </div>
       </div> 
    );
}

export default DriverCard;