import React from 'react';
import './CreditCard.css';

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
  // Format the credit card number to show only the last 4 digits
  const lastFourDigits = number.slice(-4);

  // Format the expiration month to always be two digits (e.g., '03' for March)
  const formattedMonth = expirationMonth.toString().padStart(2, '0');

  // Determine the credit card type logo    
  const cardLogo = type === 'Visa' ? '/img/visa.png' : '/img/mastercard.png';

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
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
        <span className="bank">
        {bank}
        </span>
        <span className="cardholder-name">
            <br />
        {owner}
        </span>
      </div>
    </div>
  );
};

export default CreditCard;
