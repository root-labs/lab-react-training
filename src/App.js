import React from "react";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import RGBColorPicker from "./components/RgbColorPicker";

const App = () => {
  return (
    <div>
      <IdCard
        firstName="M Khan"
        lastName="Pasha"
        gender="Male"
        height={5.7}
        birth={new Date("2010-01-12")}
        image="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        firstName="Sarah"
        lastName="Mazumdar"
        gender="Female"
        height={5.5}
        birth={new Date("2011-01-12")}
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="fr">Francois</Greetings>
      <Greetings lang="es">Espanoil</Greetings>
      <Greetings lang="en">English</Greetings>

      <Random min={4} max={12} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={12} g={123} b={189} />

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

      <Rating>2.5</Rating>

      <Rating>1.5</Rating>

      <Rating>3</Rating>

      <Rating>4</Rating>
      <div className="flex flex-col items-center space-y-4 p-4">
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
      </div>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <LikeButton />
      </div>
      <div>
        <ClickablePicture
          img="./assets/images/maxence.png"
          imgClicked="./assets/images/maxence-glasses.png"
        />
      </div>
      <div>
        <Dice />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Carousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg",
          ]}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Numbers Table</h1>
      <NumbersTable limit={12} />
    </div>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">RGB Color Picker</h1>
      <RGBColorPicker />
    </div>
    </div>
  );
};

export default App;
