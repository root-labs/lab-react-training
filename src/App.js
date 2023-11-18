import "./App.css";

// Components
import IdCard from "./components/idCard/IdCard";
import Greeting from "./components/greeting/Greeting";
import Random from "./components/random/Random";
import BoxColor from "./components/boxColor/BoxColor.js";
import CreditCard from "./components/creditCard/CreditCard";
import Rating from "./components/rating/Rating";
import DriverCard from "./components/driverCard/DriverCard";
import LikeButton from "./components/likeButton/LikeButton";
import ClickablePicture from "./components/clickablePicture/ClickablePicture";
import Dice from "./components/dice/Dice";
import Carousel from "./components/carousel/Carousel";
import NumbersTable from "./components/numbersTable/NumbersTable.js";
import RGBColorPicker from "./components/RGBColorPicker/RGBColorPicker";

// Data
import { idCardData } from "./data/idCardData";
import { creditCardData } from "./data/creditCardData";
import { ratingData } from "./data/ratingData";
import { driverCardData } from "./data/driverCardData";
import { carouselData } from "./data/carouselData";

// IMG
import img from "./assets/images/maxence.png";
import imgClicked from "./assets/images/maxence-glasses.png";

function App() {
  return (
    <div className="App">
      <div className="container-id-card">
        <h2>ID Card</h2>
        {idCardData.map((data) => (
          <IdCard {...data} key={data.birth} />
        ))}
      </div>
      <div className="greetings">
        <h2>Greetings</h2>
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>
      </div>
      <div className="random">
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div className="box-color">
        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div className="credit-card-wrapper">
        <h2>CreditCard</h2>
        <div className="credit-cards">
          {creditCardData.map((data) => (
            <CreditCard {...data} key={data.number} />
          ))}
        </div>
      </div>
      <div className="rating">
        <h2>Rating</h2>
        {ratingData.map((data) => (
          <Rating key={data}>{data}</Rating>
        ))}
      </div>
      <div className="driver-card-wrapper">
        <h2>DriverCard</h2>
        <div className="driver-cards">
          {driverCardData.map((data) => (
            <DriverCard {...data} key={data.name} />
          ))}
        </div>
      </div>
      <div className="like-button-wrapper">
        <h2>Like Button</h2>
        <div className="like-buttons">
          <LikeButton />
          <LikeButton />
        </div>
      </div>
      <div className="clickable-picture-wrapper">
        <h2>Clickable Picture</h2>
        <ClickablePicture img={img} imgClicked={imgClicked} />
      </div>
      <div className="dice-wrapper">
        <h2>Dice</h2>
        <Dice />
      </div>
      <div className="carousel-wrapper">
        <h2>Carousel</h2>
        <Carousel images={carouselData} />
      </div>
      <div className="numbers-table-wrapper">
        <h2>Numbers Table</h2>
        <NumbersTable limit={12} />
      </div>
      <div className="rgb-color-picker-wrapper">
        <h2>RGB Color Picker</h2>
        <RGBColorPicker />
      </div>
    </div>
  );
}

export default App;
