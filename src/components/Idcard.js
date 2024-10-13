import React from 'react';
import userData from '../data/berlin.json'; // Adjust the path as necessary

function IdCard() {
  return (
    <div>
      {userData.map((user, index) => (
        <div
          key={index}
          style={{
            border: '1px solid black',
            padding: '10px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={user.img}
            alt={`${user.firstName} ${user.lastName}`}
            style={{ marginRight: '15px', width: '100px', height: '100px' }}
          />
          <div>
            <p>
              <strong>First Name:</strong> {user.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {user.lastName}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Height:</strong> {user.height} cm
            </p>
            <p>
              <strong>Birth:</strong> {new Date(user.birth).toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IdCard;