function Random({ min, max }) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return <h2 className="border border-black m-3 p-2">Random number between {min} and {max} => {randomNumber}</h2>;
}

export default Random;