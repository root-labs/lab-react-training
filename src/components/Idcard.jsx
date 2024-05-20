import React from 'react';
import "./Idcard.css"

const Idcard = (props) => {


  return (
    <>
      <div className="idcard">
        <div>
          <img width={150} src={props.picture} alt=" an" />
        </div>
        <div>
          <p>
            <b>First Name:</b> {props.firstName}
          </p>
          <p>
            <b>Last Name:</b> {props.lastName}
          </p>
          <p>
            <b>Height :</b> {props.height}
          </p>
          <p>
            <b>Gender :</b> {props.gender}
          </p>

          <p>
            <b>Birth :</b> {props.birth.toString().slice(0,15)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Idcard;