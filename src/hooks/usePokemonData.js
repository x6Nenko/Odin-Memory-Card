function usePokemonData(pickedPokemons) {
  async function getPoke(url) {
    const response = await fetch(url);
    return await response.json();
  }

  if (pickedPokemons) {
    return Promise.all(pickedPokemons.map(poke => getPoke(poke.url))).then(result => console.log(result));
  }
}

export default usePokemonData;