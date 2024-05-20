import "./Idcard.css"
const Greetings= (props) => {
    let text;
    if(props.lang === "de"){
        text = "Hallo";
    }else if(props.lang === "fr" || props.lang === "es"){
        text= "Bonjour";
    }
    return(
        <>
            <h3 className="greetings">{text} {props.children}</h3>
        </>
    );
};
export default Greetings;