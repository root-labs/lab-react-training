import React from "react";
const Random = ({min,max})=>{
    function randomNumber(){
        return  Math.floor(min+Math.random()*(max-min));
    }
    return(
        <div>
<h2>
  random value between {min} and {max} == {randomNumber()}
</h2>
        </div>
    )
}

export default Random;