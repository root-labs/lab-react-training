import React from 'react';
import './DriverCard.css';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt={name} className="driver-img" />
      <div className="driver-info">
        <h2>{name}</h2>
        <Rating isDriverCard>{rating}</Rating> {/* Pass the prop to indicate it's within DriverCard */}
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;