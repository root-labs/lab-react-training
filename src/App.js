import React from 'react'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'

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

      <Random min={4} max={12}/>

      <BoxColor r={255} g={0} b={0}/>
      <BoxColor r={12} g={123} b={189}/>

    
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
    </div>
  )
}

export default App