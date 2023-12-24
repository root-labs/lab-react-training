import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[currentColorIndex],
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={handleLikeClick}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;
