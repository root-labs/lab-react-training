function Greetings({ lang, children }) {
    const greetings = {
        en: 'Hello',
        de: 'Hallo',
        es: 'Hola',
        fr: 'Bonjour'
    };

    return <div style={{border: '1px solid #000',padding:'6px',margin: '10px',width:'20%',textAlign:'left'}}>{greetings[lang]} {children}</div>;
}
export default Greetings;