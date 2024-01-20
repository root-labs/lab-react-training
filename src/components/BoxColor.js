import './BoxColor.css';
import { rgbToHex } from './Utility.js';

export default function BoxColor (props) {

    const boxStyle = {
        backgroundColor: `rgb(${props.r},  ${props.g}, ${props.b})`
    }

    const hex = rgbToHex(props.r, props.g, props.b);

    return (
        <div className="colorBox" style={boxStyle}>
            <p className="content">{`rgb(${props.r}, ${props.g}, ${props.b})`} </p>
            <p className="content">{hex.toUpperCase()}</p>
        </div>
    )
}
