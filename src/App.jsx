import { useState, useEffect } from 'react';
import './App.css'
import useData from './hooks/useData';
import { pickRandomPokemons } from './utils/pokemonUtils';

function App() {
  const data = useData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  console.log(data && data.results);

  const selectedPokemons = data && pickRandomPokemons(data.results, 3);
  console.log(selectedPokemons);

  // get non repeating random pokemons
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
