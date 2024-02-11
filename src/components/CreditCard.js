import React from 'react';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, logo }) => {
  const lastFourDigits = number.slice(-4);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    margin: '10px',
    position: 'relative', // Add position relative to the card container
    fontFamily: 'Arial, sans-serif',
  };

  const logoStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '50px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  };

  const cardTypeStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const cardNumberStyle = {
    fontSize: '20px',
    marginBottom: '10px',
  };

  const cardInfoStyle = {
    fontSize: '16px',
    marginBottom: '5px',
  };

  return (
    <div style={cardStyle}>
      {logo && <img src={logo} alt="Logo" style={logoStyle} />} {/* Render logo if provided */}
      <div style={cardTypeStyle}>{type}</div>
      <div style={cardNumberStyle}>**** **** **** {lastFourDigits}</div>
      <div style={cardInfoStyle}>Expires: {expirationMonth}/{expirationYear}</div>
      <div style={cardInfoStyle}>Bank: {bank}</div>
      <div style={cardInfoStyle}>Owner: {owner}</div>
    </div>
  );
};

export default CreditCard;
