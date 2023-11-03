
import './../App.css';

function IdCard(props) {
  return (
     <div className="Container">
     <div className="one">
<img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
</div>
<div className="two">
       <p> <strong>First name: </strong>{props.firstName}</p>
        <p><strong>Last name: </strong>{props.lastName}</p>
       <p><strong>Gender: </strong>{props.gender}</p>
      <p><strong>Height: </strong>{props.height}</p>
   <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
        </div>
 
        </div>
       
  );
}

export default IdCard;
