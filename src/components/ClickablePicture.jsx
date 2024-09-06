import React, {useState} from 'react'

export default function ClickablePicture({img, imgClicked}) {

    const [image, setImage] = useState(img);

    
    function changeImage(){
       // Toggle between img and imgClicked
       setImage(prevImage => prevImage === img ? imgClicked : img);
    }

  return (
      <div>
          <img src={image} onClick={changeImage} alt='img'></img>
    </div>
  )
}
