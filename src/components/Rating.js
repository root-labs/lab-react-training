function Rating(props)
{
    let rate=Math.round(props.children)
    let s=''
    let i=1
    while(i<=rate)
    {
        s+='★'
        ++i;
    }
    while(i<=5)
    {
        s+='☆'
        i++;
    }
    return <div>
        <p style={{fontSize : '20px'}}>{s}</p>
        <p style={{fontSize : '50px'}}>{s}</p>
    </div>
}
export default Rating
