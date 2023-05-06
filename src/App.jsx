/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contenedor from './components/Contenedores/Contenedor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contenedor />
    </>
  )
}

export default App
