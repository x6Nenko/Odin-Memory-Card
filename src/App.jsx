import { useState, useEffect } from 'react';
import useData from './hooks/useData';
import usePokemonData from './hooks/usePokemonData';
import { pickRandomPokemons, shuffleArray, isDuplicated } from './utils/pokemonUtils';
import PokeCard from './components/PokeCard/PokeCard.component';

function App() {
  const data = useData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  // console.log(data);
  console.log("HIT");

  const [selectedPokemons, setSelectedPokemons] = useState(null);
  const [pokemonsData, setPokemonsData] = useState();

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memorizedPokemons, setMemorizedPokemons] = useState([]);
  const [isStart, setIsStart] = useState(true);

  const pokemonsDataResult = usePokemonData(selectedPokemons);

  useEffect(() => {
    if (pokemonsDataResult) {
      setPokemonsData(pokemonsDataResult);
      setIsStart(false);
    }
  }, [pokemonsDataResult]);

  function clickCardHandler(name) {
    setMemorizedPokemons([...memorizedPokemons, name])

    if (isDuplicated([...memorizedPokemons, name])) {
      // useState is a snapshot of current render, so memorizedPokemons will be updated only at next render
      // due to this reason I also pass name of clicked pokemon in this stage to check for duplicates without
      // waiting next re-render
      console.log("Duplicated... try again.");
      setMemorizedPokemons([]);
      return setCurrentScore(0);
    }

    if ([...memorizedPokemons, name].length === selectedPokemons.length) {
      console.log("Well done!");
      setCurrentScore(0);
      setMemorizedPokemons([]);
      return setBestScore(selectedPokemons.length);
    }

    setCurrentScore(prevScore => prevScore + 1);

    if (currentScore >= bestScore) {
      setBestScore(prevScore => prevScore + 1);
    }

    setPokemonsData(shuffleArray(pokemonsData));
  }

  function startBtnHandler(event) {
    let difficulty;

    event.target.value === "easy" ? difficulty = 6 : 
    event.target.value === "medium" ? difficulty = 10 :
    event.target.value === "hard" ? difficulty = 16 : null;

    if (data) {
      setCurrentScore(0);
      setBestScore(0);
      setMemorizedPokemons([]);
      setSelectedPokemons(pickRandomPokemons(data.results, difficulty));
    }
  }


  // start component
  // header
  // result

  return (
    <>
      <section className='score-section'>
        <p>Current score: {currentScore}</p>
        <p>Best score: {bestScore}</p>
      </section>

      <section className='difficulty-section'>
        <button value={"easy"} onClick={(event) => startBtnHandler(event)}>Easy</button>
        <button value={"medium"} onClick={(event) => startBtnHandler(event)}>Medium</button>
        <button value={"hard"} onClick={(event) => startBtnHandler(event)}>Hard</button>
      </section>

      {isStart && 
        <section className='start-screen'>
          <h1>Choose a difficulty to start/restart the game.</h1>
          <p>Game rules: pick all cards one by one without repeating.</p>
        </section>
      }
      
      <section className='poke-cards-section'>
        {pokemonsData && pokemonsData.map((poke, index) => (
          <PokeCard 
            pokeData={poke}
            key={`${poke.name} ${index}`}
            handleClick={() => clickCardHandler(poke.name)}
          />
        ))}
      </section>
    </>
  )
}

export default App
