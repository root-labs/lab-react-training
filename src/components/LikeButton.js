import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
function LikeButton() {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setIndex((index + 1) % colors.length);
  }
  return (
    <button
      onClick={handleClick}
      style={{
        color: "#ffffff",
        backgroundColor: colors[index],
        margin: "5px",
      }}
    >
      {count} {count === 1 ? "Like" : "Likes"}
    </button>
  );
}

export default LikeButton;
