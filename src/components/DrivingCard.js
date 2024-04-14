import Rating from "./Rating";
function DriverCard({ name, rating, img, car }) {
    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        margin:'20px',
        border: '1px solid #ccc',
        borderRadius: '15px',
        backgroundColor:'blue',
        color:'white',
        justifyContent:'center',
        textAlign:'left',
        fontSize:'1.2em'
    };

    const imgStyle = {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginRight: '20px',
    };

    return (
        <div style={cardStyle}>
            <img src={img} alt="driver" style={imgStyle} />
            <div>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
}
export default DriverCard;