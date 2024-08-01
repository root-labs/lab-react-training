export default function DriverCard({ name, rating, img, car }) {
  // Ensure rating is between 0 and 5
  const validatedRating = Math.max(0, Math.min(5, parseFloat(rating)));

  // Format the rating to one decimal place
  const formattedRating = validatedRating.toFixed(1);

  // Card styles
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    margin: "20px 0",
  };

  const imgStyle = {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    marginRight: "20px",
  };

  const textStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const nameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const ratingStyle = {
    color: "#f39c12",
  };

  const carStyle = {
    fontSize: "14px",
    color: "#333",
  };

  return (
    <div style={cardStyle}>
      <img src={img} alt={`${name}`} style={imgStyle} />
      <div style={textStyle}>
        <div style={nameStyle}>{name}</div>
        <div style={ratingStyle}>{formattedRating} ★</div>
        <div style={carStyle}>
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
}
