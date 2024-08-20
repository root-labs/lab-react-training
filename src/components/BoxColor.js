import "./BoxColor.css";

function BoxColor({ r, g, b }) {
  let rgbValue = `rgb(${r}, ${g}, ${b})`;
  let hexValue =
    "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  return (
    <div id="cbox" style={{ background: rgbValue }}>
      <div>{rgbValue}</div>
      <div>{hexValue}</div>
    </div>
  );
}

export default BoxColor;
