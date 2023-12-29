


const SingleColorPicker = ({ color, value, onChange }) => {
    return (
      <div>
        <label htmlFor={`${color}Value`}>{color.toUpperCase()}</label>
        <br />
        <input
          type="number"
          id={`${color}Value`}
          value={value}
          onChange={(e) => onChange(color, parseInt(e.target.value, 10))}
          min="0"
          max="255"
        />
      </div>
    );
  };


  export default SingleColorPicker