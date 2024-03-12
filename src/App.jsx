import { useState, useEffect } from 'react';
import './App.css'
import useData from './hooks/useData';
import usePokemonData from './hooks/usePokemonData';
import { pickRandomPokemons } from './utils/pokemonUtils';

function App() {
  const data = useData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  // console.log(data);

  const selectedPokemons = data ? pickRandomPokemons(data.results, 3) : null;
  const pokemonsData = usePokemonData(selectedPokemons);
  console.log(pokemonsData);


  // fetch pokemon data
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
