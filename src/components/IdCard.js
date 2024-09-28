import React from 'react';

function IdCard(props) {
  return (
    <div style={{
      border: '1px solid black',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      margin: '10px',
      padding: '10px',
      width: '300px'
    }}>
      <img 
        src={props.picture} 
        alt={`${props.firstName} ${props.lastName}`} 
        style={{ width: '100px', borderRadius: '5px', marginRight: '10px' }} 
      />
      <div>
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Last name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height / 100} m</p>
        <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
