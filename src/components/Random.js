import React from "react";

function Random({ min, max }) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return <p>Random value between {min} and {max}: {randomValue}</p>;
}

export default Random;
