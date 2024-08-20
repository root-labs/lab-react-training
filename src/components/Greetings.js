import "./Greetings.css";

const langGreet = {
  de: "Hallo",
  es: "Hola",
  fr: "Bonjour",
  en: "Hello",
};

function Greetings({ lang, children }) {
  let greet = langGreet[lang];
  return (
    <div id="gbox">
      {greet} {children}
    </div>
  );
}

export default Greetings;
