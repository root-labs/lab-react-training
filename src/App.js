
import './App.css';
import Id from './components/Id';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButtonFunc from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';


function App() {
  return (
    <div>
    <Id  	lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      // birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg" 
      
      />
      <Id
      	lastName='Delores '
	      firstName='Obrien'
	      gender='female'
	      height={172}
	      // birth={new Date("1988-05-11")}
	      picture="https://randomuser.me/api/portraits/women/44.jpg"

       /> 

       <Greeting lang={"hello"} />
       <Random min= {2} max={300}/>
       <BoxColor r={100} b= {100} g={100}/>
       <CreditCard
        	type={"Visa"}
	        number={"3229384939283928"}
	        expirationMonth={3}
          expirationYear={2021}
          bank={"BNP"}
          owner={"Maxence Bouret"}
          bgColor={"#11aa99"}
          color={"white"}
        
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
        color="white" />
        <Rating>0</Rating>
        <Rating>1</Rating>
        <Rating>2</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <DriverCard
	name="Travis Kalanick"
	rating={4.2}
	img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
	car={{
		model: "Toyota Corolla Altis",
		licensePlate: "CO42DE"
	}}/>
  <LikeButtonFunc/>
  <ClickablePicture

  img="https://upload.wikimedia.org/wikipedia/commons/d/d0/Red-eyed_Tree_Frog_-_Litoria_chloris_edit1.jpg"

  imgClicked="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Amietophrynus_rangeri_Raucous_toad_Probable_mature_female_IMG_3715.JPG/1200px-Amietophrynus_rangeri_Raucous_toad_Probable_mature_female_IMG_3715.JPG"

/>
<Dice/>

    </div>
  );
}

export default App;
