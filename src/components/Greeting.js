import './Greeting.css'

function Greeting(props)
{
    let sayHello=''
    switch (props.lang) {
        case 'de':
          sayHello= `Hallo`;
          break;
        case 'fr':
          sayHello = `Bonjour`;
          break;
        default:
          sayHello = `Hello`;
      }
    return (
       <div className='greet'>
           <span>{sayHello} {props.children}!</span>
       </div>
    );
}

export default Greeting
