import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-xl shadow-md w-96">
      {/* Driver Image */}
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mr-4"
      />

      {/* Driver Info */}
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{name}</h2>
        <Rating>{rating}</Rating>
        <p className="text-sm text-gray-600">{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
