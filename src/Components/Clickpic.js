import React, { useState } from 'react'


const ClickablePicture = (props) => {
    const [image, setImage] = useState(true);

    function handleClick(){
        setImage(!image);
    }

  return (
    <div>
        {image ? <img onClick={handleClick}
        src={props.img}
        alt='image'
      />:<img onClick={handleClick}
        src={props.imgClicked} 
        alt='image clicked'
      /> }

    </div>

  )
}

export default ClickablePicture
