import React from 'react';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const lastFourDigits = number.slice(-4);
  return (
    <div style={{ backgroundColor: bgColor, color: color, display: 'flex', flexDirection: 'column', width: '300px', height: '200px', borderRadius: '10px', padding: '20px' }}>
      <div>{type}</div>
      <div style={{ marginTop: 'auto' }}>{`**** **** **** ${lastFourDigits}`}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div>Expires {expirationMonth}/{expirationYear}</div>
          <div>{bank}</div>
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
