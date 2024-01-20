import React, { useState } from 'react';
import './LikeButton.css';

export default function LikeButton() {

    const colors = ['purple','blue','green','yellow','orange','red'];

    let [count, setCount] = useState(0);
    let [style, setStyle] = useState({
        backgroundColor: '#04AA6D'
    });
    let [index, setIndex] = useState(0);

    function increaseCount() {
        //increase the count
        setCount((count) => count + 1);

        //change the bg color
        setStyle({backgroundColor: colors[index]});

        //update index
        setIndex((index) => (index + 1) % colors.length)
    }

    return (
        <button style={style} class="likeButton" type="button" onClick={increaseCount}>{count} Likes</button>
    )
}
