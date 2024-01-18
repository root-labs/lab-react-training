import logo from "./logo.svg";
import "./App.css";
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import Rating from "./Rating";
import DriverCard from "./DriverCard";
import LikeButton from "./LikeButton";
import ClickablePicture from "./ClickablePicture";
import Dice from "./Dice";

function App() {
  return (
    <div>
      <IdCard
        lastName="Alfie"
        firstName="Jay"
        gender="male"
        height={180}
        birth={new Date("2000-12-08")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={167}
        birth={new Date("2001-11-08")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Jay</Greetings>

      <Greetings lang="fr">Obrien</Greetings>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={6}
        expirationYear={2021}
        bank="BNP"
        owner="Jayson Alfie"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={10}
        expirationYear={2021}
        bank="N26"
        owner="Clarissa Larrysa"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2024}
        bank="Name of the Bank"
        owner="Jantie Claire"
        bgColor="#ddbb55"
        color="white"
      />

      <Rating>0</Rating>

      <Rating>1.49</Rating>

      <Rating>1.5</Rating>

      <Rating>3</Rating>

      <Rating>4</Rating>

      <Rating>5</Rating>
      
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      />
      <LikeButton />
      <LikeButton />
      <ClickablePicture
        img="./assets/images/maxence.png"
        imgClicked="./assets/images/maxence-glasses.png"
      />
      <Dice/>
      
    </div>
  );
}

export default App;
