import React, { useState } from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-orange-500', 'bg-red-500'];

    const handleClick = () => {
        setLikes(likes + 1);
    };

    return (
        <button 
            onClick={handleClick} 
            className={`py-2 px-4 font-bold text-white rounded border border-black ${colors[likes % colors.length]}`}
        >
            {likes} Likes
        </button>
    );
}

export default LikeButton;