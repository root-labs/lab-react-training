import React from 'react'

const CreditCard = ({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) => {
    const formatCreditCardNumber = (cardNumber) => {

    
    // Calculate the number of hidden digits
    const hiddenDigitsCount = cardNumber.length - 4;
    
    // Create a string of '*' characters for the hidden digits
    const hiddenPart = '*'.repeat(hiddenDigitsCount);
    
    // Keep the last 4 digits visible
    const visible = cardNumber.slice(-4);
    
    // Concatenate the visible and hidden parts
    return ` ${hiddenPart} ${visible}`;
  };
  
  return (
    <div className="Card" style={{color:color,background:bgColor}}>
      <h1>{type}</h1>
      <h3>{formatCreditCardNumber(number)}</h3>

      <p>
        Expires <span>{expirationMonth}/{expirationYear}</span>
      </p>
      <p> {bank}</p>
      {owner}
    </div>
  )
}

export default CreditCard
