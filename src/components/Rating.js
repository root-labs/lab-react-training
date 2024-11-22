function Rating({ children }) {
    const filledStars = Math.round(children); // Round to nearest whole number
    const stars = Array.from({ length: 5 }, (_, index) => 
        index < filledStars ? '★' : '☆'
    ).join('');

    return <h2 className="text-2xl">{stars}</h2>;
}

export default Rating;