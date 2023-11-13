import React from 'react';
import './../App.css';

function SingleColorPicker ({color, value, onChange}) {
 return (
    <div className="somthing" >
            <label>{color.toUpperCase()}:</label>
       <input
        type="number"
        value={value}
        onChange={(e) => onChange(color, parseInt(e.target.value))}
        min={0}
        max={255}
      />
    </div>
  );
}

export default SingleColorPicker  ;
