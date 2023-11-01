import React, { useState } from 'react'

function LikeButtonFunc() {

    const [count, setCount] = useState(20)
    

    


    const arr = ['purple','blue','green','yellow','orange','red']

    const [color, changeColor] = useState( "white")
    const [colorOne, changeColorOne] = useState( "white")


    const handleLikeClick = () => {
        setCount(count + 1)
        changeColor(arr[Math.floor(Math.random() * arr.length)])
        
    
    }

    const handleUnlikeClick = () => {
        setCount(count - 1)
        changeColorOne(arr[Math.floor(Math.random() * arr.length)])
    }
    return (
      <>
        
        <div>{count}</div><div>{color}</div><div>{colorOne}</div>
        <button style={{backgroundColor: color}} onClick={handleLikeClick}>Like</button>
        <button style={{backgroundColor: colorOne}} onClick={handleUnlikeClick}>Unlike</button>
      </>
    )
}

export default LikeButtonFunc