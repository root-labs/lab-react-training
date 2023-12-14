import React from 'react'
import '../components/IDcard.css'

const IDcard = ({firstName,lastName,gender,picture,height,birth}) => {

  return (
    <div className='card'>
       <div className='img'>
           
           <img src={picture} alt="" />
       </div>
       <div className='details'>
        <div className='fname'><b>First Name: </b> {firstName}</div>
        <div className='lname'><b>Last Name: </b>{lastName}</div>
        <div className='gender'><b>Gender: </b> {gender}</div>
        <div className='gender'><b>Height: </b> {height}</div>
        <div className='gender'><b>Birth: </b> {birth.toLocaleDateString()}</div>
        

       </div>
      
    </div>
  )
}

export default IDcard