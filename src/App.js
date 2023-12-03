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

//export default App;
import React from 'react';
import IdCard from './components/idCard';

function App() {
  return (
    <div className="App">
      {/* Other components or content goes here */}
      
      {/* Render the IdCard component */}
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
}

export default App;
import React from 'react';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      {/* Other components or content goes here */}
      
      {/* Render the Greetings component */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

// export default App;
