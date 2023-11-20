import React, {useState} from "react";

const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = () => {
        setLikes(likes+1);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    const buttonStyle = {
        backgroundColor: colors[colorIndex],
        padding: '8px 15px',
        marginRight: '10px',
        cursor: 'pointer',
        color: 'white',
        borderColor: '#ccc',
        fontSize: '18px'
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {likes} Likes
        </button>
    );
}

export default LikeButton;