import React, { useState } from 'react'



function ClickablePicture(props) {

    const {img, imgClicked} = props
    const [showGlasses, setGlasses] = useState(true)


    function showFormClick(){
        setGlasses(true)
      }

      function hideFormClick(){
        setGlasses(false)
      }

        


  return (
        

 

    <div>

    {
      !showGlasses && (
        <img onClick={showFormClick} src={img} style={{ width: 300, height: 300 }} ></img>
      )
    }
    {
      showGlasses && (
        <img onClick={hideFormClick} src={imgClicked} style={{ width: 300, height: 300}} ></img>
      )
    }
    
    </div>
  )
}

export default ClickablePicture