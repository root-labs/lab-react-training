import "./idcard.css"

const Greetings = (props) => {
  let text;

  if (props.lang === "en") {
    text = "hello";
  } else if ((props.lang === "de")) {
    text = "Hallo";
  } else if (props.lang === "fr" || props.lang==="es") {
   text="Bonjour"; 
}
  return (
    <>
      <h3 className="greeting">
        {text} {props.children}
      </h3>
    </>
  );
};

export default Greetings;
