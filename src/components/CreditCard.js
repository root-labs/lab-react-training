import React from "react";
  
const CreditCard = (props) => {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const lastFourDigits = number.slice(-4);
    const formattedExpirationDate = `${expirationMonth.toString().padStart(2, '0')}/${expirationYear.toString().slice(-2)}`;
    const cardLogo = type === 'Visa' ? '/assets/images/visa.png' : '/assets/images/master-card.svg';
    
    const cardStyle = {
      backgroundColor: bgColor,
      color: color,
      padding: '20px',
      borderRadius: '10px',
      width: '300px',
      display: 'inline-block'
    };
  
    return (
      <div className="credit-card" style={cardStyle}>
        <div style={{float: 'inline-end'}}>
          <img src={cardLogo} alt={type} style={{ width: '50px', marginBottom: '20px' }} />
        </div>
        <div style={{clear: 'both'}}>
          <div style={{ fontSize: '30px', marginBottom: '10px', textAlign: 'center' }}>•••• •••• •••• {lastFourDigits}</div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginTop: '20px'}}>
            <span>Expires {formattedExpirationDate}</span>
            <span style={{marginLeft: '25px'}}>{bank}</span>
          </div>
          <div style={{ fontSize: '16px'}}>{owner}</div>
        </div>
        </div>
    )
}

export default CreditCard;