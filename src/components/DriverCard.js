import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div
      style={{
        backgroundColor: '#455EB5',
        color: 'white',
        width: 'full',
        borderRadius: '10px',
        padding: '15px',
        margin: '15px',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          marginRight: '15px',
          objectFit: 'cover',
        }}
      />
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
