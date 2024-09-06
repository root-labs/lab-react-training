import React from "react";
import Rating from "./Rating";
import "./DriverCard.css";

export default function DriverCard({ name, rating, img, car }) {
  let driversLicense = car.licensePlate;
  let carModel = car.model;
  return (
    <div className="drivers-license">
      <div className="driver-info">
        <div className="driver-img-div"><img className="driver-img" src={img} alt="drivers-img" /></div>
        <div className="text-driver">
          <h1 className="driver-name">{name}</h1>
          {/* rating gets converted into stars */}
          <Rating>{rating}</Rating>
          {/* obj properties get accessed by dot notation */}
          <p className="driver-car">
            {driversLicense} - {carModel}
          </p>
        </div>
      </div>
    </div>
  );
}
