import React from 'react';

const Greetings = ({ lang, children }) => {
  // Define greeting text based on the `lang` prop
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
    <div>
      {greeting} {children}
    </div>
  );
};

export default Greetings;
