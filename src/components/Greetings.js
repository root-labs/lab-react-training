import React from "react";

const Greetings = (props) => {
    const {lang, children} = props;

    const greetingsMap = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    };

    return (
        <div className="box">
            <p>{greetingsMap[lang]} {children}</p>
        </div>
    );
}

export default Greetings;