import React from "react";

function Greetings({ lang, children }) {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return <h2>{greetings[lang]} {children}</h2>;
}

export default Greetings;
