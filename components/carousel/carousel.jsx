import React from 'react';
import './Carousel.css'

function Carousel(props)
{
    let arr=props.images
    let len=arr.length
    const[img_num , setImg]=React.useState(2)
    function left()
    {
        if(img_num===0)
        setImg(len-1)
        else
        setImg((img_num-1)%len)
    }
    function right()
    {
        setImg((img_num+1)%len)
    }
    return <div className='carousel'>
        <button onClick={left}>Left</button>
        <img src={arr[img_num]} alt='pic' style={{width:'300px'}}/>
        <button onClick={right}>Right</button>
    </div>
}
export default Carousel
