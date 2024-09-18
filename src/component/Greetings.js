import React from 'react'
import './Greetings.css'

function Greetings(props) {
    const { lang, children } = props;
    
    const greetings = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
    }

    const greetingText = greetings[lang] || 'Hello';

  return (
    <div className='greetings'>
        {greetingText} {children}
    </div>
  )
}

export default Greetings