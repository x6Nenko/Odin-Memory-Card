import { useState, useEffect } from 'react';
import './App.css'
import useData from './hooks/useData';
import { pickRandomPokemons } from './utils/pokemonUtils';

function App() {
  const data = useData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');

  const selectedPokemons = data && pickRandomPokemons(data.results, 3);
  console.log(selectedPokemons);

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
