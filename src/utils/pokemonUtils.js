export function pickRandomPokemons(data, amount) {
  const selectedPokemons = [];
  
  for (let index = 0; index < amount; index++) {
    const pokemonIndex = Math.floor((Math.random() * data.length) + 1);
    selectedPokemons.push(data[pokemonIndex])
  }

  return selectedPokemons
}