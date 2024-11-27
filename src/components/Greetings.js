import React from "react";

function Greetings(props){
    const languageHello={
        en: "Hello",
        fr: "Bonjour",
        es: "Hola",
        de: "Hallo",
        it: "Ciao",
        pl: "Salam"
    }
     
    
    return (
        <div className= "greeting-container">
            <h3>{languageHello[props.lang]} {props.children}</h3>
        </div>


    );
}

export default Greetings;