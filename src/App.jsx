import { useState, useEffect } from 'react';
import useData from './hooks/useData';
import usePokemonData from './hooks/usePokemonData';
import { pickRandomPokemons } from './utils/pokemonUtils';
import PokeCard from './components/PokeCard/PokeCard.component';

function App() {
  const data = useData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  // console.log(data);

  const [selectedPokemons, setSelectedPokemons] = useState(null);

  useEffect(() => {
    if (data) {
      setSelectedPokemons(pickRandomPokemons(data.results, 3));
    }
  }, [data]);

  const pokemonsData = usePokemonData(selectedPokemons);
  console.log(pokemonsData);


  // start component
  // header
  // card
  // result

  return (
    <>
      Hello World!
      
      <section className='poke-cards-section'>
        {pokemonsData && pokemonsData.map((poke, index) => (
          <PokeCard 
            pokeData={poke}
            key={index}
          />
        ))}
      </section>
    </>
  )
}

export default App
