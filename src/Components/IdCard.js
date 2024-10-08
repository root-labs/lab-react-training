import React from "react";

function IdCard(props) {
    return (
        <div className="idCard-container">
            <img src={props.picture} alt="profile"></img>
            <div className="text">
                <div><b>First name:</b> {props.firstName}</div>
                <div><b>Last name:</b> {props.lastName}</div>
                <div><b>Gender:</b> {props.gender}</div>
                <div><b>Height:</b> {props.height / 100}m</div>
                <div><b>Birthdate:</b> {props.birth.toDateString()}</div>
            </div>
        </div>
    );
}

export default IdCard;