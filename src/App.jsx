import { useState, useEffect } from 'react';
import './App.css'
import useData from './hooks/useData';

function App() {
  const data = useData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  console.log(data);

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
