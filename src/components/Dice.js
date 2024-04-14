import { useState } from 'react';
import imageName from "../assets/images/dice-empty.png";
let Dice = () => {
    const [diceImage, setDiceImage] = useState({imageName: imageName});

    const handleClick = () => {
        setDiceImage({imageName: imageName});
        setTimeout(() => {
            const randomDiceValue = Math.floor(Math.random() * 6) + 1;
            setDiceImage(`../assets/images/dice${randomDiceValue}.png`);
        }, 1000);
    };
    const ImagesStyle ={
        width: '20vw',
        height: '40vh',
        borderRadius: '50%'
    }
    const Container = {
        width: '50vw',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={Container}>
         <img src={diceImage} alt="Dice" style={ImagesStyle} onClick={handleClick} />
        </div>
    );
};

export default Dice;