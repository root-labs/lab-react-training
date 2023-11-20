import { useState } from "react";
import { likeButtonData } from "../../data/likeButtonData";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };
  // random color
  const color =
    likeButtonData[Math.floor(Math.random() * likeButtonData.length)];
  return (
    <div style={{ backgroundColor: color }} className="like-button">
      <span>{count}</span>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        Like
      </button>
    </div>
  );
}

export default LikeButton;
