
import './../App.css';
import { useState } from 'react';
const options = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

function LikeButton () {
    const [value ,setvalue] = useState(0);
    const [BgIndex, setBgIndex] = useState(0);
   function handleClick(){
    const nextBgIndex = (BgIndex + 1) % options.length;
        setvalue (value + 1 )
        setBgIndex(nextBgIndex)
    }
    const btnStyle = {
      backgroundColor: options[BgIndex],
    };   
  return (
     
     <div >
  <button onClick={handleClick} style={btnStyle} >{value}Likes</button>
 
        </div>
       
  );
}

export default LikeButton ;
