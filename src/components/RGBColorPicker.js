import SingleColorPicker from "./SingleColotPicker";

import React, { useState } from 'react';

import './RGBColorPicker.css';

export default function RGBColorPicker() {
    const [colorValues, setColorValues] = useState({
        rValue: 0,
        gValue: 0,
        bValue: 0,
    });

    const handleColorChange = (color, newValue) => {
        setColorValues({
            ...colorValues,
            [`${color}Value`]: newValue,
        });
    };

    return (
        <div className="colorPickerContainer">
            <div className="singleColorPickers">
                <SingleColorPicker
                    color="r"
                    value={colorValues.rValue}
                    onChange={handleColorChange}
                />
                <SingleColorPicker
                    color="g"
                    value={colorValues.gValue}
                    onChange={handleColorChange}
                />
                <SingleColorPicker
                    color="b"
                    value={colorValues.bValue}
                    onChange={handleColorChange}
                />
            </div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: `rgb(${colorValues.rValue}, ${colorValues.gValue}, ${colorValues.bValue})`,
                    margin: '10px',
                }}
            ></div>
        </div>
    )
}
