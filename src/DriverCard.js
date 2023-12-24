import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{rating} Stars</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
