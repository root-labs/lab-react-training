function Greeting({ lang, children }) {
  const supportedLang = {
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
    de: "Hallo",
  };
  const text = supportedLang[lang] || lang.en;
  return (
    <p>
      {text} {children}
    </p>
  );
}

export default Greeting;
