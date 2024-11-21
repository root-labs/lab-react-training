import React, { useState } from 'react';

const LikeButton = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [likes, setLikes] = useState(0); // Track the number of likes
  const [colorIndex, setColorIndex] = useState(0); // Track the current color index

  const handleClick = () => {
    setLikes(likes + 1); // Increment likes
    setColorIndex((colorIndex + 1) % colors.length); // Cycle through colors
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded text-white font-bold"
      style={{ backgroundColor: colors[colorIndex] }}
    >
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  );
};

export default LikeButton;
