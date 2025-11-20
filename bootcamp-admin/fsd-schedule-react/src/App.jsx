import { useState } from 'react'
import Schedule from './components/Schedule'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>FSD Schedule in React</h1>
      <div className="card">
        <Schedule />
      </div>
       {/*} <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click [somewhere] to learn more
      </p>
      */}
    </>
  )
}

export default App
