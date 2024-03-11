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