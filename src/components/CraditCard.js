import Visa from '../assets/images/visa.png'
import MySvgComponent from './svg'; 
function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const lastFourDigits = number.slice(-4); // Get last 4 digits of the card number
    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
        width: '30%',
        float:'left',
        margin:'10px',
        borderRadius:'10px',
        padding:'30px 0 0 30px'
    };
    const cardImage = type === "Visa" ?  {Visa} : {MySvgComponent} 

    return (<>
        <div className="credit-card" style={cardStyle}>
            <img src={cardImage} alt={type}  />
            <p style={{fontSize:'26px', fontWeight:'bold'}}>**** **** **** {lastFourDigits}</p>
            <p style={{textAlign:'left'}}>Expires {expirationMonth}/{expirationYear}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{bank}</span></p>  
            
            <p style={{textAlign:'left'}}>{owner} </p>
        </div>
        </>
    );
}

export default CreditCard;