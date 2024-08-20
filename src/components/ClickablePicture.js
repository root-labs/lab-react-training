import { useState } from "react";

function ClickablePicture(props) {
  const [glass, setGlass] = useState(false);
  let pic = props.img.slice(props.img.lastIndexOf("/") + 1);
  let picClicked = props.imgClicked.slice(
    props.imgClicked.lastIndexOf("/") + 1
  );
  let source = glass ? picClicked : pic;
  return (
    <img
      src={require(`../assets/images/${source}`)}
      alt="glasses"
      onClick={() => setGlass(!glass)}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;
