import "./App.css";
import IdCard from "./component/IdCard";
import { format } from "date-fns";
import Greetings from "./component/Greetings";
import Random from "./component/Random";

function App() {
  return (
    <>
      <div className=" mx-10 my-10 flex-col App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
        <h1 className="font-bold flex self-start text-3xl">IdCard</h1>
        <div className="App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
          <IdCard
            picture="https://randomuser.me/api/portraits/men/44.jpg"
            firstName=" John"
            lastName=" Doe"
            gender=" male"
            height={178}
            birth={format(new Date(), "1992-07-14")}
          />
        </div>
        <div className="App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
          <IdCard
            picture="https://randomuser.me/api/portraits/women/44.jpg"
            firstName=" Obrien"
            lastName=" Delores "
            gender=" female"
            height={172}
            birth={format(new Date(), "1988-05-11")}
          />
        </div>
        <h1 className="font-bold my-10 flex self-start text-3xl">Greetings</h1>
        
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        
          <h1 className="font-bold my-10 flex self-start text-3xl">Random</h1>
          <Random  min={1}  max={6}/>
          <Random  min={1}  max={100}/>

      </div>
    </>
  );
}

export default App;
