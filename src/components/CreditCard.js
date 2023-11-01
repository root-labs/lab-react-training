import React from 'react';
import './../App.css';

function CreditCard(props) {
    const { type, number,expirationMonth,expirationYear,bank,owner,bgColor,color } = props;

    
    const CreditCardNumber = (number) => {
        
        const last4 = number.slice(-4);
        const hiddenDigits = '•'.repeat(number.length - 4);
        const formattedNumber = hiddenDigits.replace(/(.{4})/g, '$1 ');
        return formattedNumber + last4;
    };

    
    const source = {
        Visa: './../visa.png',
        'Master Card': './../mastercard.png', 
    };

    return (
        <div className="flexdev"  style={{ width : 400 , backgroundColor: bgColor,color:color }} >

            <img src={source[type]} alt={type} />
            <h1>{CreditCardNumber(number)}</h1>
            <div>
            Expires {expirationMonth}/{expirationYear          }
            {bank}<br></br>
            {owner}
            </div>
        </div>
    );
}

export default CreditCard;
