import visaCard from "../../assets/images/visa.png";
// master-card.svg logo, not functioning with import properly
import masterCard from "../../assets/images/Mastercard-logo.png";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  // hide number of credit card with stars for security reasons and only display the last 4
  number = number.slice(-4).padStart(number.length, "*");
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="credit-card-logo">
        {type === "Visa" ? (
          <img src={visaCard} alt="Visa" />
        ) : (
          <img src={masterCard} alt="Master Card" />
        )}
      </div>

      <div className="credit-card-info">
        <p id="credit-card-number">{number.match(/.{1,4}/g).join(" ")}</p>
        <p className="credit-card-expiration">
          0{expirationMonth}/{expirationYear}
          <span className="credit-card-bank">{bank}</span>
        </p>
        <p className="credit-card-owner">{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
