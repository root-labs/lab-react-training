import "./App.css";
import IDcard from "./components/IDcard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice"; 

function App() {

  return (
    <div className="App">
      <IDcard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
      />
      <IDcard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>

      <Greetings lang="fr">François</Greetings>

      <Random min={2} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      <LikeButton />
      <LikeButton />

      <ClickablePicture
        img= {require('./assets/images/maxence.png')}
        imgClicked={require("./assets/images/maxence-glasses.png")}
      />
      <Dice/>
      
    </div>
  );
}

export default App;
