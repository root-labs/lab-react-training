import React from 'react';
import Rating from './Rating'; // Assuming you have the Rating component in the same directory

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'blue', color: 'white', width: '500px', height: '200px', borderRadius: '10px' }}>
      <img src={img} alt={name} style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
