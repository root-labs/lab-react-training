import React, { useState } from 'react'
import './ClickablePicture.css';

export default function (props) {

    let [image, setImage] = useState(props.image);

    const changeImage = () => {
        //change the image url
        // setImage(props.imageClicked);
        if(image === props.image) {
            setImage(props.imageClicked);
        }
        else {
            setImage(props.image);
        }
    }

    return (
        <div>
            <img className="image" src={image} onClick={changeImage}/>
        </div>
    )
}
