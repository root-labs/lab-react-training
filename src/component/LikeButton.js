import { useState } from "react";
import './LikeButton.css'

import React from 'react'

const LikeButton = () => {
    const [likes, setLikes] = useState(0)

    const [colorIndex, setColorIndex] = useState(0)

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const handleClick = () =>{
        setLikes(likes + 1)
        setColorIndex((colorIndex + 1) % colors.length)
    }
  return (
    <div>
        <button className="like-button" style={{backgroundColor: colors[colorIndex]}} onClick={handleClick}>{likes} Likes</button>
    </div>
  )
}

export default LikeButton