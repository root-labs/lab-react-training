import React from 'react';
import './../App.css';
import Rating from './Rating'; 

function DriverCard(props) {
  return (
    <div className="driverCard">
      <img style={{width: 100 ,height: 100}} src={props.img} alt={props.name} />
      <div className="driverInfo">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating> 
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
