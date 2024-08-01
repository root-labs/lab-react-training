export default function BoxColor(props) {
    const { r, g, b } = props;
    const isValidColor = (value) => value >= 0 && value <= 255;
    const validatedR = isValidColor(r) ? r : 0;
    const validatedG = isValidColor(g) ? g : 0;
    const validatedB = isValidColor(b) ? b : 0;

    const style = {
        backgroundColor: `rgb(${validatedR}, ${validatedG}, ${validatedB})`,
        color: (validatedR + validatedG + validatedB) > 382 ? 'black' : 'white', 
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '10px',
    };

    return (
        <div style={style}>
            rgb({validatedR}, {validatedG}, {validatedB})
        </div>
    );
}