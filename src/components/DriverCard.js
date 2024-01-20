import React from 'react';
import './DriverCard.css';
import Rating from './Rating';

export default function DriverCard(props) {

    const {model, licensePlate} = props.car;
    return (
        <div className='driverCard'>
            <img className='driverImage' src={props.img}/>
            <div className='driverInfoContainer'>
                <div className='driverName'>{props.name}</div>
                <div className='rating'>
                    <Rating>{props.rating}</Rating>
                </div>
                <div className='car'>{model} - {licensePlate}</div>
            </div>
        </div>
    )
}
