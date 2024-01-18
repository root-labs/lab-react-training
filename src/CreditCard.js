import React from "react";
import "./CreditCard.css"

const CreditCard =(props) => {

    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color,
    } =props;

    //Displaying the last four digitd of the credit card no
    const lastFourDigits = number.slice(-4);
    const hiddenDigits = "....  ....  ....";

    //Ensuring the month is formatted with leading zero if necessary
    const formattedMonth = expirationMonth.toString().padStart(2, "0");

    //formating the expiration date as MM/YY
    const  formattedExpirationDate = `${formattedMonth}/${expirationYear.toString().slice(-2)}`;

    //styling object for the component
    const cardStyle = {
        backgroundColor:bgColor,
        color:color,
    }
    
    return(
        <div className="credit-card" style={cardStyle}>
            <div className="type">{type}</div>
            <div className="number">{hiddenDigits + lastFourDigits}</div>
            <div className="expiration">{formattedExpirationDate}</div>
            <div className="bank">{bank}</div>
            <div className="owner">{owner}</div>
        </div>
    )
}

export default CreditCard;
