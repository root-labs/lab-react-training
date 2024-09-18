import React from 'react'
import './IdCard.css'


function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;

      let formattedBirthDate = birth.toDateString().replace(/,/g, "");
  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className="id-card-details">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {(height / 100).toFixed(2)}m
        </p>
        <p>
          <strong>Birth:</strong> {formattedBirthDate}
        </p>
      </div>
    </div>
  );
}

export default IdCard