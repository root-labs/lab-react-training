// src/components/CreditCard.js
import React from 'react';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const displayNumber = `**** **** **** ${number.slice(-4)}`;

  return (
    <div style={{
      backgroundColor: bgColor,
      color: color,
      padding: '20px',
      borderRadius: '5px',
      width: '300px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div>{type}</div>
      <div>{displayNumber}</div>
      <div>Expires: {expirationMonth}/{expirationYear}</div>
      <div>{bank}</div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
