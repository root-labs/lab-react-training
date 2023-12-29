import React from "react";


const Greeting = ({lang,children})=>{
    function langDetect(){
        if(lang==="de"){
            return 'Hallo '+children
        }
        else if(lang==="fr"){
            return 'Bonjour '+children
        }
        else{
            return "Namaste "+children
        }
    }
    return(
   <div className="greetings">
    <h4>{langDetect()}</h4>
   </div>
    )
}

export default Greeting;