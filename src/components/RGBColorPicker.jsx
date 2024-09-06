import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

export default function RGBColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const onChangeRed = (event) => {
    setRed(Number(event.target.value)); // Update the red value
  };

  const onChangeGreen = (event) => {
    setGreen(Number(event.target.value)); // Update the green value
  };

  const onChangeBlue = (event) => {
    setBlue(Number(event.target.value)); // Update the blue value
  };

  return (
    <div className="colors" style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
      
      {/* Red Input */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div
          className="red-box"
          style={{ backgroundColor: "red", width: "4rem", height: "4rem", marginRight: "1rem" }}
        />
        <SingleColorPicker color="r" value={red} onChange={onChangeRed} />
      </div>

      {/* Green Input */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div
          className="green-box"
          style={{ backgroundColor: "green", width: "4rem", height: "4rem", marginRight: "1rem" }}
        />
        <SingleColorPicker color="g" value={green} onChange={onChangeGreen} />
      </div>

      {/* Blue Input */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div
          className="blue-box"
          style={{ backgroundColor: "blue", width: "4rem", height: "4rem", marginRight: "1rem" }}
        />
        <SingleColorPicker color="b" value={blue} onChange={onChangeBlue} />
      </div>

      {/* Result Color Box */}
      <div
        className="result-color"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: "4rem",
          height: "4rem",
          marginTop: "1rem",
        }}
      />

      {/* RGB Value Display */}
      <p>RGB({red}, {green}, {blue})</p>
    </div>
  );
}
