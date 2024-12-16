import React from "react";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const style = {
    backgroundColor: bgColor,
    color: color,
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div style={style}>
      <div><strong>{type}</strong></div>
      <div>**** **** **** {number.slice(-4)}</div>
      <div>Expires {expirationMonth}/{expirationYear}</div>
      <div>{bank}</div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
