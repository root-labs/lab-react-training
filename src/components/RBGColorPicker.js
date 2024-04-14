import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
const RGBColorPicker = () => {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const handleColorChange = (color, value) => {
        if (color === 'r') {
            setRValue(value);
        } else if (color === 'g') {
            setGValue(value);
        } else if (color === 'b') {
            setBValue(value);
        }
    };

    return (
        <div>
            <h4>R:<SingleColorPicker color="r" value={rValue} onChange={(value) => handleColorChange('r', value)} /></h4>
            <h4>G:<SingleColorPicker color="g" value={gValue} onChange={(value) => handleColorChange('g', value)} /></h4>
            <h4>B:<SingleColorPicker color="b" value={bValue} onChange={(value) => handleColorChange('b', value)} /></h4>
            <div style={{display:'flex'}}>
                    <div style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`, width: '100px', height: '100px',margin:'0 2% 2% 40%' }}>
                    </div>
                    <h5>RGB({rValue},{gValue},{bValue})</h5>
            </div> 
        </div>
    );
};


export default RGBColorPicker;