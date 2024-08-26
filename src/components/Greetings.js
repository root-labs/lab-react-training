import React from 'react';
import './Greetings.css';

function Greetings(props) {
  const { lang, children } = props;

  // Map language codes to greetings
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  // Get the appropriate greeting based on the lang prop
  const greetingText = greetings[lang] || 'Hello'; // Default to 'Hello' if lang is not recognized

  return (
    <div className="greetings">
      {greetingText} {children}
    </div>
  );
}

export default Greetings;