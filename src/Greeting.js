import React from 'react';

const Greetings = ({ lang, children }) => {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div className="greetings">
      <p>{`${greetings[lang]} ${children}`}</p>
    </div>
  );
};

export default Greetings;
