import React, { useState } from "react";

const ClickablePicture = ({img,imgClicked})=>{
 
    const [isClicked,setIsClicked] = useState(false)
   
    function handleClick(){
        setIsClicked(!isClicked)
    }
    return(
          <img   src={isClicked?imgClicked:img} alt="" onClick={handleClick} />
    )
}


export default ClickablePicture;