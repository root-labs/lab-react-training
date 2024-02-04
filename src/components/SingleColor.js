function SingleColor(props)
{
    return <div>
        <label>{(props.color).toUpperCase()} : </label>
        <input type='number' min={0} max={255} value={props.value} onChange={(event) => props.onChange(parseInt(event.target.value, 10))} />
    </div>
}

export default SingleColor
