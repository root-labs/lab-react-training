import React from 'react'

const BoxColor = ({r,g,b}) => {

    const bgColor=`rgb(${r},${g},${b})`
  return (
    <div>
        <div className='h-8 w-auto bg-gray-500' style={{backgroundColor:bgColor}}>
          {bgColor}
        </div>
    </div>
  )
}

export default BoxColor