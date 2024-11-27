import React from "react";

function Ratings(props) {
    const roundedRatings = Math.floor(props.children);
    const stars = "★".repeat(roundedRatings) + "☆".repeat(5 - roundedRatings);
    return (
        <div className="rating-container">{stars}</div>
    )
}

export default Ratings;