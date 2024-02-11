import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setBgColorIndex((bgColorIndex + 1) % colors.length);
  };

  return (
    <div>
        <button
      style={{ backgroundColor: colors[bgColorIndex] }}
      onClick={handleLikeClick}
    >
      {likes} Likes
    </button>

    <button
      style={{ backgroundColor: colors[bgColorIndex] }}
      onClick={handleLikeClick}
    >
      {likes} Likes
    </button>
    </div>
    
    
  );
};

export default LikeButton;
