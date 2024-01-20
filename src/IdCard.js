import React from "react";
import "./IdCard.css"


function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="nameTag">
      <img src={picture} alt={`${firstName} ${lastName}`} />

      <div className="details">
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}cm</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
