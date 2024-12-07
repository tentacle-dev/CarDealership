import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from "../src/components/navbar"
import CarCard from './components/CarCard'
import CarListPage from './components/CarListPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <CarListPage />
    </div>
  )
}

export default App
