import React from "react";

function SingleColorPicker(props) {
    const handleInputChange = (e) => {
        props.onChange(e.target.value);
    }
    return (
        <div className="single-color-picker">
            <div className="color-box" style={{ backgroundColor: props.color === 'r' ? `rgb(${props.value}, 0, 0)` : props.color === 'g' ? `rgb(0, ${props.value},0)` : `rgb(0, 0, ${props.value})` }}></div>
            <label>{props.color.toUpperCase()}:</label>
            <input type="number" min='0' max='255' value={props.value} onChange={handleInputChange} />
        </div>
    )
}

export default SingleColorPicker;