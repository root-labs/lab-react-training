import './Table.css'

function Table(props)

{

    const divs=[]

    let i=1;

    while(i<=props.limit)

    {

        if(i%2===0)

        divs.push(<div className="even">{i}</div>)

        else 

        divs.push(<div className="odd">{i}</div>)

        ++i;

    }

    console.log(divs)

    return <div>{divs}</div>;

}

export default Table