import React from "react";

const Greetings = (props) => {
  const greetingDd = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "bonjour",
  };
  const { lang, children } = props;

  return (
    <div className=" my-10 flex App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
      <p>
        {greetingDd[lang]} {children}
      </p>
    </div>
  );
};
export default Greetings;
