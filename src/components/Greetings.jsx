import React from "react";

export default function Greetings({ lang, children }) {
  return (
    <div className="greetings">
      <h1>
        {" "}
        {lang === "en"
          ? "Hello"
          : lang === "fr"
          ? "Bonjour"
          : lang === "de"
          ? "Hallo"
          : "Hello"}{" "}
        {children}
      </h1>
    </div>
  );
}
