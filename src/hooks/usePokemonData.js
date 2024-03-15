import { useState, useEffect } from 'react';

function usePokemonData(pickedPokemons) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function getPoke(pickedPokemons) {
      const responses = await Promise.all(pickedPokemons.map(poke => fetch(poke.url)));
      const result = await Promise.all(responses.map(response => response.json()));
      return result
    }

    if (pickedPokemons && pickedPokemons.length > 1) {
      getPoke(pickedPokemons).then(result => {
        if (!ignore) {
          setData(result);
        }
      });

      return () => {
        ignore = true;
      };
    }
  }, [pickedPokemons]);

  return data;
}

export default usePokemonData;
