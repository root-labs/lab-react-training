import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.pickersContainer}>
        <SingleColorPicker
          color="r"
          value={rValue}
          onChange={(value) => setRValue(Number(value))}
        />
        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={(value) => setGValue(Number(value))}
        />
        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={(value) => setBValue(Number(value))}
        />
      </div>

      <div style={styles.colorAndText}>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
            border: "1px solid black",
            marginRight: "10px",
          }}
        ></div>
        <div
          style={{
            fontSize: "16px",
            color: "black",
            fontFamily: "Arial, sans-serif",
          }}
        >
          rgb({rValue},{gValue},{bValue})
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "100px",
  },
  pickersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  colorAndText: {
    display: "flex",
    alignItems: "center",
  },
};

export default RGBColorPicker;
