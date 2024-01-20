import './Greetings.css';

export default function Greetings(props) {

    const { lang, children } = props;
    let greeting = "";

    switch (lang) {
        case "de":
            greeting = "Hallo " + children;
            break;

        case "en":
            greeting = "Hello " + children;
            break;

        case "es":
            greeting = "Hola " + children;
            break;

        case "fr":
            greeting = "Bonjour " + children;
            break;
    }

    return (
        <div className="greetingBody">
            <p className="greeting">{greeting}</p>
        </div>
    )
}