import './NumbersTable.css'
function NumbersTable(props)
{
    const divs=[]
    let i=1;
    while(i<=props.limit)
    {
        if(i%2===0)
        divs.push(<div key="" className="even">{i}</div>)
        else 
        divs.push(<div key="" className="odd">{i}</div>)
        ++i;
    }
      return <div>{divs}</div>;
}
export default NumbersTable