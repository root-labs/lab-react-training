const SingleColorPicker = ({ color, value, onChange }) => {
    const backgroundColor = color === 'Red' ? `rgb({value}, 0, 0)` : color === 'Green' ? `rgb(0, {value}, 0)` : `rgb(0, 0, {value})`;

    return (<>
            <div style={{backgroundColor: backgroundColor, height:'25px',width:'25px',marginLeft:'40%'}}></div>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                min={0}
                max={255}
            />
        </>
    );
};
export default SingleColorPicker;