import React from "react";
import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [color, setColor] = useState('blue');

    const handleClick = () => {
        setLikes(likes + 1);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
        console.log(color)
    }
    return (
        <button className="like-button" onClick={handleClick} style={{ backgroundColor: color }}>{likes} Likes</button>
    )
}

export default LikeButton;