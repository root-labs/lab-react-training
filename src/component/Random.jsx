import React from 'react'
const Random = (props) => {

   const {min, max} = props;
   const randFunction = (min, max) => {
        return Math.floor(Math.random() * max + min);
   }

    return (
        <div className=" my-10 flex App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
        <p>
          Random value between {min} and {max} ={'>'} {randFunction(min, max)}
        </p>
      </div>
    )
}

export default Random;