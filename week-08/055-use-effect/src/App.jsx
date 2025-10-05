import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './components/Pokemon';
import PokemonSelector from './components/PokemonSelector';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>API calls - one of the most common times to use useEffect</h2>
      <Pokemon />
      <h2>Dependency + API Call</h2>
    </>
  )
}

export default App
