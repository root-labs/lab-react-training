import './Random.css'

function Random(props)
{

    let s='=>'

    return  
    <div class='rnd'>
      <span>Random value between {props.min} and {props.max} {s} {props.min+parseInt(Math.random()*(props.max-props.min+1))}</span>
    </div>;

}




export default Random