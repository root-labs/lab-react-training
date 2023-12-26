import React, { useState } from 'react'
const LikeButton = () => {
    const colors = ['purple','blue','green','yellow','orange','red']
    const[likes, setLikes] = useState(0);
    const[bgcolor, setBgColor] = useState(colors[0])

    let randomColor = Math.floor(Math.random()*(1+5)+1) ;
    const handleLikes=()=>{
        setLikes((s)=> s+1);
        setBgColor((c)=>{ 
            c = colors[randomColor];
            return c;
        })   
    }
  return (
    <div>
       <button style={{width:"100px", height:"40px",margin:"10px",backgroundColor:`${bgcolor}`,color:'white'}} onClick={handleLikes} >{likes} Likes</button>
    </div>
  )
}
export default LikeButton