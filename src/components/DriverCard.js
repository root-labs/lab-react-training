import "./DriverCard.css";

function DriverCard({ name, rating, img, car }) {
  let displayRating = "★".repeat(Math.round(rating)).padEnd(5, "☆");
  return (
    <div id="dbox">
      <div id="dimg">
        <img src={img} alt="Driver DP" />
      </div>
      <div>
        <div id="dname">{name}</div>
        <div id="drating">{displayRating}</div>
        <div id="dcar">
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
