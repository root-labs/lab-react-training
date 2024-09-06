import React from 'react'
import MasterCard from "../assets/images/mastercard.png"
import Visa from "../assets/images/visa.png"
import "./CreditCard.css";

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    
     // Determine the img source based on the card type
  const cardImage = type === "Visa" ? Visa : type === "Master Card" ? MasterCard : null;
  
    return (
        <div className='credit-card' style={{ backgroundColor: bgColor, color: color }}>
            <div className='img-div-cc'><img src={cardImage} alt={type}></img></div>
            <div className="card-details">
        <p>**** **** **** {number.slice(-4)}</p>
                <p className='more-details'>Expires {expirationMonth}/{expirationYear} {bank}</p>
        <p className='more-details'>{owner}</p>
      </div>
    
    </div>
  )
}
