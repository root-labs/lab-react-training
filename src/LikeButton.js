import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [color, setColor] = useState(colors[0]);

  const handleClick = () => {
    setLikes(likes + 1);
    setColor(colors[likes % colors.length]);
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: color, color: 'white' }}>
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  );
};

export default LikeButton;
