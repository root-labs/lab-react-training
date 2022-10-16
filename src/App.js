import "./App.css";
import IdCard from "./component/IdCard";
import { format } from 'date-fns'

function App() {
  return (
    <>
      <div className="App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth={format(new Date(), '1992-07-14')}
        />
      </div>
      <div className="App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          firstName="Obrien"
          lastName="Delores "
          gender="female"
          height={172}
          birth={format(new Date(), '1988-05-11')}
        />
      </div>
    </>
  );
}

export default App;
