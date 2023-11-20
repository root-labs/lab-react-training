import { useState } from "react";

// Random function
import getRandomDice from "../../utils/getRandomDice";

// Assets
import emptyDice from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";

// Data
const diceData = {
  emptyDice,
  allDices: [dice1, dice2, dice3, dice4, dice5, dice6],
};

function Dice() {
  const [dice, setDice] = useState({
    empty: false,
    emptyDice: diceData.emptyDice,
    randomDice: getRandomDice(diceData.allDices),
  });

  const handleClick = () => {
    setDice((prev) => ({
      ...prev,
      empty: !prev.empty,
    }));

    setTimeout(() => {
      setDice((prev) => ({
        ...prev,
        empty: !prev.empty,
        randomDice: getRandomDice(diceData.allDices),
      }));
    }, 1000);
  };

  return (
    <div className="dice">
      <img
        src={dice.empty ? dice.emptyDice : dice.randomDice}
        alt="dice"
        onClick={handleClick}
      />
    </div>
  );
}

export default Dice;
