import './CreditCard.css';

import React from 'react'

export default function CreditCard(props) {
    let imageURL = '';
    let imageAlt = '';
    switch (props.type) {
        case 'Visa':
            imageURL = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg";
            imageAlt = "Visa";
            break;

        case 'Mastercard':
            imageURL = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg";
            imageAlt = "Mastercard";
            break;
    }

    let digits = props.number.slice(-4);
    let maskedNumber = "**** **** **** " + digits;

    const style = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    return (
        <div className='creditCard' style={style}>
            <div className='logoContainer'>
                <img className="logo" src={imageURL} alt={imageAlt} />
            </div>
            <div className='numberContainer'>
                {maskedNumber}
            </div>
            <div className='bankInfoContainer'>
                <div className='expirationDate'>
                    {props.expirationMonth}/{props.expirationYear}
                </div>
                <div className='bankName'>
                    {props.bank}
                </div>
                <div className='ownerName'>
                    {props.owner}
                </div>
            </div>
        </div>
    )
}
