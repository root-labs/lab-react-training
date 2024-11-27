import React from "react";

function Idcard(props){
    return(
        <div className="idCard-container">
            <img src={props.picture} alt="profile"></img>
            <div className="text">
                <div><b>First Name:</b>{props.firstName}</div>
                <div><b>Last Name:</b>{props.lastName}</div>
                <div><b>Gender:</b>{props.gender}</div>
                <div><b>Height:</b>{props.height / 100}m</div>
                <div><b>Birthdate:</b>{props.birth.toDateString()}</div>
            </div>
        </div>

    );
}

export default Idcard;