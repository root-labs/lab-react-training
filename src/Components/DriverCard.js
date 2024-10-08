import React from "react";
import Ratings from "./Ratings";

function DriverCard(props) {
    return (
        <div className="driver-card">
            <div className="driver-img">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="driver-info">
                <h1>{props.name}</h1>
                <Ratings className="driver-rating">{props.rating}</Ratings>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;