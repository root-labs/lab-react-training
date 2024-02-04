import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const formattedBirthDate = birth.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="id-card">
        <section >
            <img className='image' src={picture} alt={`${firstName} ${lastName}`} />
            <ul>
                <li><strong>Last Name:</strong> {lastName}</li>
                <li><strong>First Name:</strong> {firstName}</li>
                <li><strong>Gender:</strong> {gender}</li>
                <li><strong>Height:</strong> {height} cm</li>
                <li><strong>Birth:</strong> {formattedBirthDate}</li>
            </ul>
        </section>
    </div>
  );
};

export default IdCard;
