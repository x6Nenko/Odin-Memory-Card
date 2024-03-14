import { useState, useEffect } from 'react';
import './App.css'
import useData from './hooks/useData';
import usePokemonData from './hooks/usePokemonData';
import { pickRandomPokemons } from './utils/pokemonUtils';

function App() {
  const data = useData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  // console.log(data);

  const [selectedPokemons, setSelectedPokemons] = useState(null);
  // const selectedPokemons = data ? pickRandomPokemons(data.results, 3) : null;

  // mb use ref here?
  useEffect(() => {
    if (data) {
      setSelectedPokemons(pickRandomPokemons(data.results, 3));
    }
  }, [data]);

  console.log(selectedPokemons);

  const pokemonsData = usePokemonData(selectedPokemons);
  console.log(pokemonsData);


  // fetch pokemon data - try to rewrite it using useEffect 
  // start component
  // header
  // card
  // result

  return (
    <>
      Hello World!
    </>
  )
}

export default App
