import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import UserDashboard from "./components/UserDashboard";
import Pokemon from "./components/Pokemon";
import PokemonSelector from "./components/PokemonSelector";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2> Basic Usage</h2>
      <WelcomeMessage />

      <h2>Dependency Array</h2>
      <UserDashboard />

      <h2>API calls - one of the most common times to use useEffect</h2>
      <Pokemon />

      <h2>Dependncy + API call</h2>
      <PokemonSelector />
    </>
  );
}

export default App;
