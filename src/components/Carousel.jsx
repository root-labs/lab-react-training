import React, { useState } from 'react'


function Carousel(props) {

    const {images} = props


    let caroArr = images

    const [index, setIndex] = useState(0)
   



    function rightBtn(){
        if (index === caroArr.length-1){
        setIndex(0) 
        } else {
            setIndex(index + 1)
        }
    }


    function leftBtn(){
        if (index === 0){
            setIndex(caroArr.length-1) 
            } else {
                setIndex(index - 1)
            }

    }

    let imgInit = caroArr[index]


  return (
    <div>
       <img src= {imgInit} alt="passed"></img>
       <button onClick={leftBtn}>Carousel Left</button>
        <button onClick={rightBtn}>Carousel Right</button>
        
    </div>
  )
}

export default Carousel