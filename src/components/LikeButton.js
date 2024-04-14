import { useState } from 'react';

const LikeButton = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const buttonStyle = {
        height:'50px',
        width:'120px',
        backgroundColor: colors[colorIndex],
        borderRadius:'15px',
        color:'white',
        fontSize:'1.4em',
        margin:'20px'
    }
    const incrementLikes = () => {
        setLikes(likes + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    return (
        <button style={buttonStyle} onClick={incrementLikes}>
            {likes} {likes === 1 ? 'Like' : 'Likes'}
        </button>
    );
};

export default LikeButton;