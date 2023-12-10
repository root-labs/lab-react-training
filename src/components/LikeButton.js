import './LikeButton.css'
import React from 'react';

let colors=['purple','blue','green','yellow','orange','red']
function LikeButton(props)
{
   const [likes,setlikes]=React.useState(0)
   function tap()
   {
       setlikes(likes+1)
   }
   return <button className='btn' style={{backgroundColor: colors[likes%6]}} onClick={tap}>{likes} Likes</button>
}

export default LikeButton