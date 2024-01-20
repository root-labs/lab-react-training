import React, { useState } from "react";
import "./LikeButton.css"

const LikeButton = () => {
    //use of tehe useState hook to manage the state of 'likes' and the 'currentColorIndex'
    const [likes, setLikes] = useState(0);
    const colors = ["purple","blue","green","yellow","orange","red"];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
     
    //event handler for the button click
    const handleLike= ()=> {
        //incrementing the 'likes' count
        setLikes(likes + 1);
        //cycling through colors based on the index
        setCurrentColorIndex((prevIndex)=> (prevIndex + 1) % colors.length);
    };

    const buttonStyle = {
        backgroundColor: colors[currentColorIndex],
    }
    
    //rendering the button with the current 'likes' count and style
    return(
        <button className="like-button" style={buttonStyle} onClick={handleLike}>
          {likes} Like{likes !== 1? "s" : " "}
        </button>
    )
}
export default LikeButton;
