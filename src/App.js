import React from 'react'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'

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
    </div>
  )
}

export default App