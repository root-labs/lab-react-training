function getRandomDice(dices) {
  // random number between 1 and 5
  const dice = Math.floor(Math.random() * dices.length);
  return dices[dice];
}

export default getRandomDice;
