import React from "react";
import { useState } from "react";
import maxence from "../assets/images/maxence.png";
import maxenceglasses from "../assets/images/maxence-glasses.png";


function ClickablePicture(props) {
    const [isClicked, setIsClicked] = useState(false);

    const hadleClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div>
            <img src={isClicked ? maxenceglasses : maxence} alt="maxence" onClick={hadleClick}></img>
        </div>
    )
}

export default ClickablePicture