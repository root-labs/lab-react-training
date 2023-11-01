import React from 'react';
import './../App.css';

function Rating({ children }) {
    const stars = parseInt(children);
    const emptyStars = 5 - stars;
    const arr = [];
   for (let i = 0 ; i < stars ; i++ ){
         arr.push('★')
   }
   for (let i = 0; i < emptyStars; i++) {
    arr.push('☆');
}
    return (
        <div className="stars" >  
            {arr}
        </div>    
    );
}

export default Rating;
