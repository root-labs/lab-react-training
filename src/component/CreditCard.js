import React from 'react';
import './CreditCard.css';
import mCard from '../assets/images/MasterCard.png'
import visa from '../assets/images/visa.png';


const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {

    const lastFourDigits = number.slice(-4);

    const formattedMonth = expirationMonth.toString().padStart(2, "0");

      const cardLogo = type === "Visa" ? visa : mCard;

  return (
    <div className='main'>
      <div
        className="credit-card"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <div className="card-logo">
          <img src={cardLogo} alt={`${type} logo`} />
        </div>
        <div className="card-number">
          <p>•••• •••• •••• {lastFourDigits}</p>
        </div>
        <div className="card-info">
          <span className="expiration">
            Expires {formattedMonth}/{expirationYear}
          </span>
          <span className="bank">{bank}</span>
          <span className="cardholder-name">
            <br />
            {owner}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreditCard