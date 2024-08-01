const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
};
export default function Greetings(props) {
    const { lang, children } = props;
    const greeting = greetings[lang] || 'Hello'; 

    return (
        <div>
            {greeting}, {children}!
        </div>
    );
}