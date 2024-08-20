function Rating({ children }) {
  let rating = Math.round(Number(children));
  let displayRating = "★".repeat(rating).padEnd(5, "☆");
  return (
    <div style={{ fontSize: "50px", textAlign: "center" }}>{displayRating}</div>
  );
}

export default Rating;
