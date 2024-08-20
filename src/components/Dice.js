import { useState } from "react";

function Dice() {
  let randomDice = Math.floor(Math.random() * 6) + 1;
  const [dice, setDice] = useState(randomDice);
  function handleClick() {
    setDice("-empty");
    setTimeout(() => setDice(randomDice), 1000);
  }
  return (
    <img
      src={require(`../assets/images/dice${dice}.png`)}
      alt="dice"
      width="300"
      onClick={handleClick}
    />
  );
}

export default Dice;
