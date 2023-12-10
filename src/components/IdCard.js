import './IdCard.css';
function IdCard(props)
{
    return (
        <div className='card'>
           <div>
            <img src={props.picture} alt='profile_pic' />
           </div>
           <div>
            <span><b>First Name</b>: {props.firstName}</span>
            <span><b>Last Name</b>: {props.lastName}</span>
            <span><b>Gender</b>: {props.gender}</span>
            <span><b>Height</b>: {props.height}</span>
            <span><b>Birth</b>: {props.birth}</span>
            
           </div>
        </div>
    )
}

export default IdCard;