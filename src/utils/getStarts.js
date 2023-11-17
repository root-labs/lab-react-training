function getStarts(numberOfStarts) {
  const roundedRating = Math.round(numberOfStarts);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push("★");
    } else {
      stars.push("☆");
    }
  }

  return stars;
}

export default getStarts;
