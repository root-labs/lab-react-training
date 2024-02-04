import React from 'react';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt={name} className="driver-image" />
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating" style={{fontSize:'30px'}}>
          {Array.from({ length: Math.round(rating) }, (_, index) => (
            <span key={index}>★</span>
          ))}
          {Array.from({ length: 5 - Math.round(rating) }, (_, index) => (
            <span key={index} >☆</span>
          ))}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
