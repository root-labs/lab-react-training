import './DriverCard.css'
import Rating from '../Rating/Rating';
function DriverCard(props)
{
return <div className='driver'>
    <div>
    <img src={props.img} alt='pic' />
</div>
<div>
    <h1>{props.name}</h1>
    <Rating>{props.rating}</Rating>
    <p>{props.car.model}-
    {props.car.licensePlate}</p>
</div>

</div>
}
export default DriverCard