import React from 'react'



 function CreditCard(props) {

    const {
       
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color,
        children
    
    } = props

let realYear = expirationYear.toString().slice(-2)

let hiddenYear = number.slice(-4)


const style1 = {backgroundColor: `${bgColor}`};
const style2 = {color: `${color}`};



  return (
    <div style={{...style1, ...style2}}>
        {type}
        <p>XXXXXXXXXXXX{hiddenYear} </p>
        <p>expires {expirationMonth}/{realYear}</p>
        <p> {bank} </p>
        <p>{owner}</p>
        <>{children}</>
    </div>
  )
}


export default CreditCard