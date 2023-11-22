import './CreditCard.css'
function CreditCard(props)
{
    // const hrf = props.type === 'visa' ? visaImage : masterCard;
    let mon=props.expirationMonth
    let yr=props.expirationYear%100
    let ex=''
    if(mon<10)
      ex='0'+mon+'/'+yr
    console.log(ex)
    return <div className='credit' style={{backgroundColor: props.bgColor,color:props.color}}>
        <img src='./assets/images/visa.png' alt='pic' />
        <h1>.... .... .... {props.number.slice(12)}</h1>
        <p>Expires {ex} {props.bank}</p>
        <p>{props.owner}</p>
    </div>;
}

export default CreditCard