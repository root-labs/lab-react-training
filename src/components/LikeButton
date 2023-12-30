import React, { useState } from "react";


const LikeButton = ()=>{
const [like , setLike] = useState(0)
const colors = ['purple','blue','green','yellow','orange','red'];
const handleLikeClick = () => {
    setLike((prev) => (prev + 1) % colors.length);
  };



    return(
          <button style={{background:colors[like]}}   onClick={handleLikeClick}>like {like}</button>
    )
}

export default LikeButton; 