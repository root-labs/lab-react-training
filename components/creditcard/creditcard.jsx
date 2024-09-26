import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercard.png'
function CreditCard(props)
{
    const img = props.type === 'Visa' ? visa : mastercard;
    let mon=props.expirationMonth
    let yr=props.expirationYear%100
    let ex=''
    if(mon<10)
      ex='0'+mon+'/'+yr

    return <div className='credit' style={{backgroundColor: props.bgColor,color:props.color}}>
    <div>
        <img src={img} alt='pic' />
        </div>
        <h1>.... .... .... {props.number.slice(12)}</h1>
        <p>Expires {ex} {props.bank}</p>
        <p>{props.owner}</p>
    </div>;
}

export default CreditCard;
