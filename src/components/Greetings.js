import React from 'react';

function Greetings({ lang, children }) {
    let greeting;
    switch (lang) {
      case 'de':
        greeting = 'Hallo';
        break;
      case 'en':
        greeting = 'Hello';
        break;
      case 'es':
        greeting = 'Hola';
        break;
      case 'fr':
        greeting = 'Bonjour';
        break;
      default:
        greeting = 'Hello';
    }

    return (
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        {greeting} {children}
      </div>
    );
  }

  export default Greetings;