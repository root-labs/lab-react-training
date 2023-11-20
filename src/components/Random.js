import React from "react";

const Random = (props) => {
    const {min, max} = props;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="box">
            Random value between {min} and {max} => {randomNumber}
        </div>
    );
}

export default Random;