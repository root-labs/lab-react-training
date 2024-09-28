// src/components/DriverCard.js
import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div style={{
      border: '1px solid #000',
      borderRadius: '5px',
      display: 'flex',
      padding: '10px',
      margin: '10px',
    }}>
      <img src={img} alt={name} style={{ width: '100px', borderRadius: '5px', marginRight: '10px' }} />
      <div>
        <h4>{name}</h4>
        <Rating>{rating}</Rating>
        <p>Car: {car.model}</p>
        <p>License Plate: {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
