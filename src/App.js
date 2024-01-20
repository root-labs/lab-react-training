import logo from './logo.svg';
import image from './assets/images/maxence.png';
import imageClicked from './assets/images/maxence-glasses.png';

import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import RGBColorPicker from './components/RGBColorPicker';

//iteration 1
class Person {
  constructor(firstName, lastName, gender, height, birth, picture) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.height = height;
    this.birth = birth;
    this.picture = picture
  }
}

const person1 = new Person(
  "John",
  "Doe",
  "Male",
  178,
  new Date("1992-07-14"),
  "https://randomuser.me/api/portraits/men/44.jpg"
)

const person2 = new Person(
  "Obrien",
  "Dolores",
  "Female",
  172,
  new Date("1993-05-11"),
  "https://randomuser.me/api/portraits/women/44.jpg"
)

//iteration 2
const languages = ['de', 'en', 'es', 'fr'];
const name1 = "Ludwig";
const name2 = "Elizabeth";
const name3 = "Pablo";
const name4 = "Sophie";

//iteration 3
const range1 = [0, 9];
const range2 = [1, 100];

//iteration 4
const red = 255;
const green = 0;
const blue = 100;

//iteration 5
class ClassCreditCard {
  constructor(type, number, expirationMonth, 
    expirationYear, bank, owner, bgColor, color){
      this.type = type;
      this.number = number;
      this.expirationMonth = expirationMonth;
      this.expirationYear = expirationYear;
      this.bank = bank;
      this.owner = owner;
      this.bgColor = bgColor;
      this.color = color
  }
}

const creditCard1 = new ClassCreditCard(
  "Visa",
  "0123456789018845",
  3,
  2021,
  "BNP",
  "Maxence Bouret",
  "#11aa99",
  "white"
)

const creditCard2 = new ClassCreditCard(
  "Mastercard",
  "0123456789010995",
  3,
  2021,
  "N26",
  "Maxence Bouret",
  "#eeeeee",
  "#222222"
)

const creditCard3 = new ClassCreditCard(
  "Visa",
  "0123456789016984",
  12,
  2019,
  "Bank of America",
  "Tony Stark",
  "#ddbb55",
  "white"
)

//iteration 6 has no variable

//iteration 7
class Driver {
  constructor(name, rating, img, car){
    this.name = name;
    this.rating = rating;
    this.img = img;
    this.car = car
  }
}

const driver1 = new Driver(
  "Travis Kalanick",
  4.2,
  "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
  {
		model: "Toyota Corolla Altis",
		licensePlate: "CO42DE"
	}
)

const driver2 = new Driver(
  "Dara Khosrowshahi",
  4.9,
  "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
  {
		model: "Audi A3",
		licensePlate: "BE33ER"
	}
)

//iteration 8 has no variable

//iteration 9 has no variable

//iteration 10 has no variable

//iteration 11
const carouselImages = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg'
];

//iteration 12

function App() {
  return (
    <div className="App">
      <div className="ids">
        <IdCard firstName={person1.firstName} lastName={person1.lastName} gender={person1.gender} height={person1.height} birth={person1.birth} image={person1.picture} />
        <IdCard firstName={person2.firstName} lastName={person2.lastName} gender={person2.gender} height={person2.height} birth={person2.birth} image={person2.picture} />
      </div>
      <div className="greetings">
        <Greetings lang={languages[0]}>{name1}</Greetings>
        <Greetings lang={languages[1]}>{name2}</Greetings>
        <Greetings lang={languages[2]}>{name3}</Greetings>
        <Greetings lang={languages[3]}>{name4}</Greetings>
      </div>
      <div className="randoms">
        <Random min={range1[0]} max={range1[1]}/>
        <Random min={range2[0]} max={range2[1]}/>
      </div>
      <div className="boxColors">
        <BoxColor r={red} g={green} b={blue}/>
        <BoxColor r={0} g={230} b={137}/>
        <BoxColor r={243} g={123} b={0}/>
        <BoxColor r={255} g={0} b={255}/>
        <BoxColor r={0} g={255} b={255}/>
        <BoxColor r={255} g={255} b={0}/>
      </div>
      <div className="creditCards">
        <CreditCard type={creditCard1.type} number={creditCard1.number} expirationMonth={creditCard1.expirationMonth} expirationYear={creditCard1.expirationYear} bank={creditCard1.bank} owner={creditCard1.owner} bgColor={creditCard1.bgColor} color={creditCard1.color}/>
        <CreditCard type={creditCard2.type} number={creditCard2.number} expirationMonth={creditCard2.expirationMonth} expirationYear={creditCard2.expirationYear} bank={creditCard2.bank} owner={creditCard2.owner} bgColor={creditCard2.bgColor} color={creditCard2.color}/>
        <CreditCard type={creditCard3.type} number={creditCard3.number} expirationMonth={creditCard3.expirationMonth} expirationYear={creditCard3.expirationYear} bank={creditCard3.bank} owner={creditCard3.owner} bgColor={creditCard3.bgColor} color={creditCard3.color}/>
      </div>
      <div className='ratings'>
        <Rating>1</Rating>
        <Rating>2</Rating>
        <Rating>2.5</Rating>
        <Rating>4.2</Rating>
        <Rating>5</Rating>
      </div>
      <div className='driverCards'>
        <DriverCard name={driver1.name} rating={driver1.rating} img={driver1.img} car={driver1.car}/>
        <DriverCard name={driver2.name} rating={driver2.rating} img={driver2.img} car={driver2.car}/>
      </div>
      <div className='likeButtons'>
        <LikeButton/>
        <LikeButton/>
        <LikeButton/>
        <LikeButton/>
        <LikeButton/>
        <LikeButton/>
      </div>
      <div className='clickablePictures'>
         <ClickablePicture image={image} imageClicked={imageClicked}/>
      </div>
      <div className='dice'>
        <Dice/>
        <Dice/>
        <Dice/>
      </div>
      <div className='carousels'>
        <Carousel images={carouselImages}/>
      </div>
      <div className='numbersTables'>
        <NumbersTable limit={12}/>
        <NumbersTable limit={50}/>
      </div>
      <div className='rgbColorPickers'>
        <RGBColorPicker/>
        <RGBColorPicker/>
        <RGBColorPicker/>
      </div>
    </div>
  );
}

export default App;