import React from 'react';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const cardTypeImage = type === 'Visa' ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' : 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg';
  const formattedNumber = `**** **** **** ${number.slice(-4)}`;
  const formattedMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
  const formattedYear = expirationYear.toString().slice(-2);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: '300px',
        height: '150px',
        borderRadius: '10px',
        padding: '15px',
        margin: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end',flexDirection: 'row' }}>
        <img src={cardTypeImage} alt={type} style={{ width: '50px' }} />
      </div>
      <div style={{ fontSize: '1.5em', letterSpacing: '2px' }}>{formattedNumber}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8em' }}>
        <div>
          Expires {formattedMonth}/{formattedYear}
        </div>
        <div>{bank}</div>
      </div>
      <div style={{ fontSize: '0.9em' }}>{owner}</div>
    </div>
  );
}

export default CreditCard;