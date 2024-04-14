function IdCard(props) {
    const birth = props.birth;
    return(
        <div><div className='container'style={{border: '1px solid #000',padding:'6px',margin: '10px'}}> 
            <img src={props.picture} alt={props.firstName} height='200px' width='160px' style={{float: 'left'}}/>
        </div>
        <div style={{textAlign:'left',margin: '0 0 0 180px'}}>
            <p><b>First Name:</b>{props.firstName}</p>
            <p><b>Last Name:</b>{props.lastName}</p>
            <p><b>Gender:</b>{props.gender}</p>
            <p><b>Height:</b>{props.height}</p>
            <p><b>Birth:</b>{birth.toDateString()}</p>
        </div>
    </div>
)
}
export default IdCard;