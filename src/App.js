import './App.css';
import Idcard from './components/Idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Ratings from './components/Ratings';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import RGBColorPicker from './components/RGBColorPicker';
function App() {
  return (
    <div className="App">
      <Idcard
        lastName= 'Saqhib'
        firstName= 'Mohammed'
        gender= 'Male'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      <Idcard
        lastName= 'Fawad'
        firstName= 'Riyaz'
        gender= 'Male'
        height={192}
        birth={new Date("1993-05-11")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />  

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="pl">Riyaz</Greetings>
      <Greetings lang="es">Santiago</Greetings>

      <Random min={3} max={22}/>
      <Random min={7} max={77}/>

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


     <Ratings>0</Ratings>

     <Ratings>1.49</Ratings>

     <Ratings>1.5</Ratings>

     <Ratings>3</Ratings>

     <Ratings>4</Ratings>

     <Ratings>5</Ratings>

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

      <LikeButton/>

      <ClickablePicture

        img='../assets/images/maxence.png'

        imgClicked='../assets/images/maxence-glasses.png'

      />

      <Dice/>

      <Carousel

        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}

      />

      <NumbersTable limit={30} />


      <RGBColorPicker />

      
    </div>

      
  );
}

export default App;
