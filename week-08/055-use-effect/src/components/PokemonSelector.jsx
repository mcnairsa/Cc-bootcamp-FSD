
import PokemonCard from './components/PokemonCard';

export  default PokemonSelector() {
    const [pokemonName, setPokemonName] = useState("");

    const pokemonOptions = [
        { id: 4, name: "charmander" },
        { id: 25, name: "pikachu" },
        { id: 132, name: "ditto" }
    ];
    return (
        <>
            <label>Choose a Pokemon:</label>
            <select 
                name = "pokemon-select"
                id="pokemon-select"
                onChange={(e)=> {
                    setPokemonName(e.target.value);
                }}
            >
            <option key={pokemonName.name} value={pokemonName.name}
            {pokemonOptions.map}></option>

            </select>
                </>
    )
    }
}