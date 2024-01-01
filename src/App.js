import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import IdCard from './IdCard';

const App = () => {
  return (
    <div>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
};

import Greetings from './Greetings';

const App = () => {
  return (
    <div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
};


import Random from './Random';

const App = () => {
  return (
    <div>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
};


import BoxColor from './BoxColor';

const App = () => {
  return (
    <div>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
};


import React from 'react';
import CreditCard from './CreditCard';

const App = () => {
  return (
    <div>
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
  );
};

import React from 'react';
import Rating from './Rating';

const App = () => {
  return (
    <div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
};

import React from 'react';
import DriverCard from './DriverCard';

const App = () => {
  return (
    <div>
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
  );
};

import LikeButton from './LikeButton';

const App = () => {
  return (
    <div>
      <LikeButton />
    </div>
  );
};
import React from 'react';
import Dice from './Dice';

const App = () => {
  return (
    <div>
      <Dice />
    </div>
  );
};


import ClickablePicture from './ClickablePicture';

const App = () => {
  const img = './assets/images/maxence.png';
  const imgClicked = './assets/images/maxence-glasses.png';

  return (
    <div>
      <ClickablePicture img={img} imgClicked={imgClicked} />
    </div>
  );
};

import Carousel from './Carousel';

const App = () => {
  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

import React from 'react';
import NumbersTable from './NumbersTable';

const App = () => {
  return (
    <div>
      <NumbersTable limit={12} />
    </div>
  );
};

import RGBColorPicker from './RGBColorPicker';

const App = () => {
  return (
    <div>
      <RGBColorPicker />
    </div>
  );
};

export default App;