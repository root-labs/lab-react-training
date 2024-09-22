import React from "react";
import visa from '../assets/images/visa.png';
import mCard from '../assets/images/master-card.png.png';

function CreditCard(props) {
    let cardSrc = (props.type === "Visa") ? visa : mCard;
    return (
        <div style={{ width: "300px", height: "130px", backgroundColor: props.bgColor, color: props.color }} className="creditCard-container">
            <div className="card-logo">
                <img src={cardSrc} alt={props.type} className="logo-img"></img>
            </div>
            <div className="card-number">
                <div>•••• •••• •••• {props.number.slice(-4)}</div>
            </div>
            <div className="card-info">

                <span className="expiry"> Expires {props.expirationMonth}/{props.expirationYear % 100}</span>
                <span>{props.bank}</span>
                <br></br>

                <span className="name">{props.owner}</span>
            </div>
        </div>
    )
}

export default CreditCard;