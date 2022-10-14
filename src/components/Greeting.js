import React from 'react'





function Greeting(props) {
    const {lang, children} = props
  return (
    <>
    <p>{lang} Ludwig</p>
    <>{children}</>
    </>
  )
}

export default Greeting