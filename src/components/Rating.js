import React from "react";

const Rating = ({children}) => {
    const filledStar = '★';
    const emptyStar = '☆';
    return (
        <div style={{fontSize: '2em'}}>
            {Array.from({length: 5}, (_, index) => (
                <span key={index}>{index < Math.round(children) ? filledStar : emptyStar}</span>
            ))}
        </div>
    )
}

export default Rating;