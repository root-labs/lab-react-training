// src/components/Greetings.js
import React from 'react';

function Greetings({ lang, children }) {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div>
      {greetings[lang]} {children}
    </div>
  );
}

export default Greetings;
