import './BoxColor.css'

function BoxColor(props)
{
    const toHex = (number) => {
        let hex = number.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    let color='#'+(toHex(props.r))+(toHex(props.g))+(toHex(props.b))
    return <div className='cbox' style={{backgroundColor:color}}>
        <p>rgb({props.r},{props.g},{props.b})</p>
        <p>{color}</p>
    </div>
}

export default BoxColor