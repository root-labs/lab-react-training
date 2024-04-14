function Rating({ children }) {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  return (
    <div style={{fontSize:'1.8em'}}>
      {'★'.repeat(filledStars)}
      {'☆'.repeat(emptyStars)}
    </div>
  );
}
export default Rating;