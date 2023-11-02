import React from "react";

const Greetings = (props) => {


  return (
    <div className="greet" style={{border:'1px solid black'}}>
      <p>
        {" "}
        {props.lang === "de"
          ? "Hallo"
          : props.lang === "en"
          ? "Hello"
          : props.lang === "fr"
          ? "Bonjour"
          : props.lang === "es"
          ? "Hii"
          : ""}{" "}
        {props.children}
      </p>
    </div>
  );
};

export default Greetings;
