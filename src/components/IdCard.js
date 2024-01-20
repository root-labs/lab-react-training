import './IdCard.css';

export default function IdCard(props) {
    return (
        <div className="idCard">
            <img className="person-image" src={props.image} />
            <div className="infoArea">
                <div><b>Last Name: </b>{props.lastName}</div>
                <div><b>First Name: </b>{props.firstName}</div>
                <div><b>Gender: </b>{props.gender}</div>
                <div><b>Height: </b>{props.height/100} m</div>
                <div><b>Birth: </b>{props.birth.toLocaleDateString()}</div>
            </div>

        </div>
    )
}