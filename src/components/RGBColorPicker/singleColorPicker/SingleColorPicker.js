function SingleColorPicker({ color, value, onChange }) {
  return (
    <div className="single-color-picker">
      <div style={{ backgroundColor: `rgb(${value},0,0)` }}></div>
      <label htmlFor={color[0]}>{color[0].toUpperCase()}: </label>
      <input
        id={color[0]}
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(e.target.value, color)}
      />
    </div>
  );
}

export default SingleColorPicker;
