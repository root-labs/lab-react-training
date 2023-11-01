import React, { useState } from 'react'

function Id(props)  {

const {
    lastName,
	firstName,
	gender,
	height,
	// birth,
	picture, 
} = props
   
    return (
        
      <div>
      <img src={picture} alt="imported"></img>
      <div>
      <p>First name: {firstName}</p>
      <p> lastName: {lastName}</p>
      <p> gender: {gender}</p>
      <p>height: {height} m</p>
      {/* <p>birth: {birth}</p> */}
        
         </div>
    </div>

       

    
    
    )
  }


//   Id.propTypes = {
//     firstName: React.string,
//     lastName: React.string,
//     gender: React.string,
//   }



export default Id