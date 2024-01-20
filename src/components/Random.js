import './Random.css';

export default function Random(props) {
    const random = Math.floor((Math.random() * props.max) + props.min);

    return (
        <div className="randomBody">
            <p className="randomValue">{`Random value between ${props.min} and ${props.max} => ${random}`}</p>
        </div>
    )
}