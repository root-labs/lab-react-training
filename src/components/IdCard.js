import React from 'react'

const IdCard = ({ firstName, lastName, gender, height, birth, image }) => {
    return (
      <div className='p-4 border border-15 flex items-center gap-2' >
        <div>
          <img src={image} alt="profilePic" />
        </div>
        <div>
          <h3>First Name: {firstName}</h3>
          <h3>Last Name: {lastName}</h3>
          <h3>Gender: {gender}</h3>
          <h3>Height: {height}</h3>
          <h3>Birth: {birth.toDateString()}</h3>
        </div>
      </div>
    );
  }
  

export default IdCard