import React from 'react'

const Random = ({min,max}) => {
    const rand=Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
        <h1>Random value betwen {min} and {max} = {rand}</h1>
    </div>
  )
}

export default Random