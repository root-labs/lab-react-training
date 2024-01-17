import React from 'react';

const IdCard = (props) => {
  // Destructuring props
  const { lastName, firstName, gender, height, birth, picture } = props;

  // Formatting date and height
  const birthDate = birth.toLocaleDateString();
  const heightInMeters = height / 100;

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <p>
          <span style={{ fontWeight: 'bold' }}>First name:</span> {firstName}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Last name:</span> {lastName}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Gender:</span> {gender}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Height:</span> {heightInMeters}m
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Birth:</span> {birthDate}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
