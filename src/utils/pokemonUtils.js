export function pickRandomPokemons(data, amount) {
  const selectedPokemons = [];
  
  while (selectedPokemons.length < amount) {
    const pokemonIndex = Math.floor(Math.random() * data.length);
    const randomPokemon = data[pokemonIndex];

    if (!selectedPokemons.some(pokemon => pokemon.name === randomPokemon.name)) {
      selectedPokemons.push(randomPokemon);
    }
  }
  
  return selectedPokemons
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  console.log(array);

  // return NEW array so react can re-render card component
  return [...array];
}