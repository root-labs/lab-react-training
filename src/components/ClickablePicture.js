import React, { useState } from 'react';
import './../App.css';

function ClickablePicture(props) {
  const [imgSrc, setImgSrc] = useState(props.img);

  function handleClick() {
    if (imgSrc === props.img) {
      setImgSrc('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMGLj6NGuFQ2GxQ3TMeoCV3ULfArdA6hiqucrud9d8CYhCylTYt40W3W5ntIWEWCEtmA&usqp=CAU');
    } else {
      setImgSrc(props.img);
    }
  }

  return (
    <div onClick={handleClick}>
      <img src={imgSrc} alt='stuff' />
    </div>
  );
}

export default ClickablePicture;
