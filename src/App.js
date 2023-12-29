import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import img from "./assets/images/maxence.png"
import imgClicked from "./assets/images/maxence-glasses.png"
import Dice from './components/Dice';
import diceEmpty from "./assets/images/dice-empty.png";
import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";
import Carousel from './components/Carousel';

import NumberList from './components/NumberList';

import RGBColorPicker from './components/RGBColorPicker';

function App() {
  return (
    <div className="App">
     <h1>IdCard</h1>
<IdCard
	picture="https://randomuser.me/api/portraits/men/44.jpg"
	firstName='John'
	lastName='Doe'
	gender='male'
	height={178}
	birth={new Date("1992-07-14")}
/>

 
<IdCard
	picture="https://randomuser.me/api/portraits/women/44.jpg"
	firstName='Obrien'
	lastName='Delores '
	gender='female'
	height={172}
	birth={new Date("1988-05-11")}

/>

<hr/>

<h1>Greetings</h1>

<Greeting  lang="de">Ludwig</Greeting>

<Greeting  lang="fr">François</Greeting>

<Greeting  lang="hi">Gurnav</Greeting>

<hr />

<h1>Random</h1>


<Random  min={1}  max={6}/>

<Random  min={1}  max={100}/>

<hr />

<h1>Box Color</h1>


<BoxColor  r={255}  g={0}  b={0}  />

<BoxColor  r={128}  g={255}  b={0}  />

<hr />
<h1>CreditCard</h1>

<div className="card__container">
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
</div>

<h1>Rating</h1>

<div className="rating">

<Rating>0</Rating>

<Rating>1.49</Rating>

<Rating>1.5</Rating>

<Rating>3</Rating>

<Rating>4</Rating>

<Rating>5</Rating>
</div>

<h1>Driver Card</h1>

<div className="drivercard__container">
<DriverCard
	name="Travis Kalanick"
	rating={4.2}
	img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
	car={{
		model: "Toyota Corolla Altis",
		licensePlate: "CO42DE"
	}}

/>

  

<DriverCard
	name="Dara Khosrowshahi"
	rating={4.9}
	img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
	car={{
		model: "Audi A3",
		licensePlate: "BE33ER"
	}}
/>
</div>

<h1>LikeButton</h1>
<div className="like-buttons">
<LikeButton  />
<LikeButton  />

</div>
<h1>Clickable Picture</h1>

<div className="clickable-picture">

<ClickablePicture

img={img}

imgClicked={imgClicked}

/>
</div>

<h1>Dice</h1>

<div className="dice">
	<Dice 
	dice = {[diceEmpty,dice1,dice2,dice3,dice4,dice5,dice6]}
	 />
</div>
<h1>Carousel</h1>
<div className="Carousel">

<Carousel

images={[
'https://randomuser.me/api/portraits/women/1.jpg',
'https://randomuser.me/api/portraits/men/1.jpg',
'https://randomuser.me/api/portraits/women/2.jpg',
'https://randomuser.me/api/portraits/men/2.jpg'
]}

/>
</div>

<h1>Number List</h1>
<div className="number_list">

<NumberList  limit={12}  />

</div>
<h1>RGBColorPicker</h1>
<div className="rgbColorPicker">

<RGBColorPicker/>
  
</div>
    </div>

	
  );
}

export default App;
