import Rating from "../rating/Rating";

function DriverCard({ name, rating, img, car: { model, licensePlate } }) {
  return (
    <div className="driver-card">
      <div className="driver-logo">
        <img src={img} alt={name} />
      </div>
      <div className="driver-info">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {model} - <span>{licensePlate}</span>
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
