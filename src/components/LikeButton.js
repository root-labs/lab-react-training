import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      className="like-button"
      style={{ backgroundColor: colors[colorIndex] }}
      onClick={handleClick}
    >
      {likes} Likes
    </button>
  );
};

export default LikeButton;