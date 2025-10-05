import { useState } from 'react'
import reactLogo from './components/Part1UpdatingObjects'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Part1UpdatingObjects />
    </>
  )
}

export default App
