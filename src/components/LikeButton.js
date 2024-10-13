import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {likes} Likes
    </button>
  );
}

export default LikeButton;