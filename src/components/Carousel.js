import React, { useState } from "react";


const Carousel = ({images})=>{

    const [index,setIndex] = useState(0);

    function prevImg(){
        setIndex(prevIndex=>(prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    function nextImg(){
        setIndex(prevIndex=>(prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    return(
        <div>
        <button onClick={prevImg}> prev</button>
            <img src={images[index]} alt="" width={300} />
         <button onClick={nextImg}>next</button>
        </div>
    )
}

export  default Carousel;