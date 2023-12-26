import React from 'react'
const CreditCard = (props) => {
    const num = 'XXXX XXXX XXXX '
    const divstyle ={
        backgroundColor:`${props.bgColor}`,
        color:`${props.color}`,
        display:'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        justifyContent: 'space-around',
        width:'300px',
        height:'130px',
        alignItems:'center'
    }
  return (
    <div className='card' style={divstyle} >
        <b style={{marginLeft:'250px',color:'blue'}}>{props.type}</b>
       <div>{num}{props.number.substr(-4)}</div> 
       <div>Expires {props.expirationMonth}/{props.expirationYear}</div>
        <div>{props.bank}</div> 
        <div>{props.owner}</div>
    </div>
  )
  }
export default CreditCard