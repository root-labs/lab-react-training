import React from "react";
import "./DriverCard.css";
import Ratings from "./Ratings";

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt={name} className="driver-img" />
      <div className="driver-info">
        <h2>{name}</h2>
        <Ratings isDriverCard>{rating}</Ratings>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
