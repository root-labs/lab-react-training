import React from "react";

const IdCard = ({ picture, firstName, lastName, gender, height, birth }) => {

  function getBirthday(){
    // Get day name
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = dayNames[birth.getDay()];


// Get month name
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[birth.getMonth()];

// Get day number
const dayNumber = birth.getDate();

// Get year
const year = birth.getFullYear();
  return `${dayName.slice(0,3)} ${monthName}  ${dayNumber}  ${year}`
  }

  function heightConversion(){
return height/100+" M"
  }
  
  return (
    <div className="idCard">
      <img src={picture} alt="" />
      <div className="card__details">
        <h3>
          FirstName: 
          <span>
          {firstName}
          </span>
        </h3>
        <h3>
          LastName: 
          <span>
          {lastName}

          </span>
        </h3>
        <h3>
          Gender:
          <span>

          {gender}
          </span>
        </h3>
        <h3>
          Height:
          <span>
          {heightConversion()}

          </span>
        </h3>
        <h3>
          Birth: 
          <span>
          {getBirthday()}

          </span>
        </h3>
      </div>
    </div>
  );
};

export default IdCard;
