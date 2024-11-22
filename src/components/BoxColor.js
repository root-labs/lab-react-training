function BoxColor({ r, g, b }) {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;
    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    return (
        <div 
            className="border border-black m-2 flex flex-col justify-center items-center" 
            style={{ backgroundColor, width: 'auto', height: '100px' }}
        >
            <p className="text-center">{backgroundColor}</p>
            <p className="text-center">{hexColor}</p>
        </div>
    );
}

export default BoxColor;