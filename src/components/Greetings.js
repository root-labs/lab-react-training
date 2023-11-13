import React from 'react';

function Greetings({ lang, children }) {
  const greetings = {
    de: `Hallo, ${children}!`,
    en: `Hello, ${children}!`,
    es: `Hola, ${children}!`,
    fr: `Bonjour, ${children}!`,
  };

  const greetingText = greetings[lang] || `Unsupported language: ${lang}`;

  return <div className="big">{greetingText}</div>;
}

export default Greetings;
