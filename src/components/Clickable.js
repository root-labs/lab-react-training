import React from 'react';
function Clickable(props)
{
    const [img,putGlasses]=React.useState(props.img)
    function glasses()
    {
        img === props.img ? putGlasses(props.imgClicked) : putGlasses(props.img);
    }
    return  <div> 
    <img src={img} alt='pic' onClick={glasses} style={{width:'150px'}}/>
    </div>
}

export default Clickable