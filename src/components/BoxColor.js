import React from "react";

function BoxColor(props){
    let color = 'rgb(${props.r},${props.g},${props.b})';
    const componentToHex= (c)=>{
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;

};

const rgbToHex = (r,g,b)=>{
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(props.r,props.g,props.b));
return(
    <div className="box-container" style={{width: "600px",height: "100px", backgroundColor: color}}>
         <p> rgb({props.r},{props.g},{props.b})</p>
         <p>{rgbToHex(props.r,props.g,props.b)}</p>
    </div>

);
}

export default BoxColor;
