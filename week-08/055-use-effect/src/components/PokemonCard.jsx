import { useEffect, useState } from "react";

export default function PokemonCard() {
const [pokemon, setPokemon] = useState({});

    // useEffect

    useEffect(()=> {
        async function fetchPokemeon(){
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            if (!response.ok) {
                throw new Error("Failed to fetch pokemon");
            }
            const data = await response.json();

            setPokemon(data);
            console.log("Pokemeon data ", data);
        } catch(err){
            console.log("You got an error: " + err);
        }
    }
    fetchPokemeon();
    }, [pokemonName]); 
    return (
        <>
            <h2>{pokemon.name}</h2>
            <p>Height: { pokemon.height }</p>
            <p>Id: { pokemon.id}</p>
        </>
    )
}