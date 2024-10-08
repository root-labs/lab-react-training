import React from "react";
import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    return (
        <div>

            <SingleColorPicker
                color="r"
                value={rValue}
                onChange={(value) => { setRValue(Number(value)) }}
            />



            <SingleColorPicker
                color="g"
                value={gValue}
                onChange={(value) => { setGValue(Number(value)) }}
            />



            <SingleColorPicker
                color="b"
                value={bValue}
                onChange={(value) => { setBValue(Number(value)) }}
            />
            <div className="result-box">
                <div className="color-box" style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}></div>
                <p>rgb({rValue},{gValue},{bValue})</p>
            </div>
        </div>
    )
}

export default RGBColorPicker;