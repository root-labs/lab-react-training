import React from 'react';
import "./DriverCard.css"


const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt="Driver" className="driver-img" />
      <div className="driver-info">
        <h2>{name}</h2>
        <p>{rating} </p>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
