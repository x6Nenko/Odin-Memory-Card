import { useState, useEffect } from 'react';
import useData from './hooks/useData';
import usePokemonData from './hooks/usePokemonData';
import { pickRandomPokemons, shuffleArray } from './utils/pokemonUtils';
import PokeCard from './components/PokeCard/PokeCard.component';

function App() {
  const data = useData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  // console.log(data);
  console.log("HIT");

  const [selectedPokemons, setSelectedPokemons] = useState(null);
  const [pokemonsData, setPokemonsData] = useState();

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (data) {
      setSelectedPokemons(pickRandomPokemons(data.results, 5));
      
    }
  }, [data]);

  const pokemonsDataResult = usePokemonData(selectedPokemons);

  useEffect(() => {
    if (pokemonsDataResult) {
      setPokemonsData(pokemonsDataResult);
    }
  }, [pokemonsDataResult]);

  function clickHandler(name) {
    console.log(name + " was clicked");
    setPokemonsData(shuffleArray(pokemonsData));
    console.log(pokemonsData);
  }


  // start component
  // header
  // result

  return (
    <>
      Hello World!
      
      <section className='poke-cards-section'>
        {pokemonsData && pokemonsData.map((poke, index) => (
          <PokeCard 
            pokeData={poke}
            key={`${poke.name} ${index}`}
            handleClick={() => clickHandler(poke.name)}
          />
        ))}
      </section>
    </>
  )
}

export default App
