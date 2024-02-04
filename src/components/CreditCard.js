import React from 'react';


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const lastFourDigits = number.slice(-4);
  const cardLogo = type === 'Visa' ? 'https://img.icons8.com/color/96/000000/visa.png' : 'https://img.icons8.com/color/96/000000/mastercard.png';

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    width: '300px',
    margin: '20px',
  };

  return (
    <div style={cardStyle}>
      <img src={cardLogo} alt={type} style={{ width: '40px', marginBottom: '10px' }} />
      <div style={{ fontSize: '25px', marginBottom: '15px'}}>**** **** **** {lastFourDigits}</div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', fontSize: '14px' }}>
        <div>
          <p>
            Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear.toString().slice(-2)}
          </p>
          <p>{bank}</p>
        </div>
        <div>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
