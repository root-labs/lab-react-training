import React from 'react'
const Random = ({min,max}) => {
  return (
    <div className='random'>
        <p>Random value between {min} and {max} = {Math.floor(Math.random() * (max - min + 1) + min)} </p>
    </div>
  )
}
export default Random