import "./CreditCard.css";
import logo from "../assets/images/visa.png";
import icon from "../assets/images/master-card-copy.svg";

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
  let cardStyle = { background: bgColor, color: color };
  let month = expirationMonth.toString().padStart(2, "0");
  let year = expirationYear.toString().slice(-2);
  let maskNumber = number.slice(-4).padStart(number.length, "•");
  let cardNumber =
    maskNumber.slice(0, 4) +
    " " +
    maskNumber.slice(4, 8) +
    " " +
    maskNumber.slice(8, 12) +
    " " +
    maskNumber.slice(12, 16);
  return (
    <div id="ccbox" style={cardStyle}>
      <img src={type === "Visa" ? logo : icon} alt={type} width={50} />
      <div id="cnumber">{cardNumber}</div>
      <div id="cdetails">
        <div>
          {" "}
          Expires {month}/{year}
          <span>{bank}</span>
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
