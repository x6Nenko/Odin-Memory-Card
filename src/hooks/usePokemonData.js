// function usePokemonData(pickedPokemons) {
//   async function getPoke(url) {
//     const response = await fetch(url);
//     return await response.json();
//   }

//   if (pickedPokemons) {
//     return Promise.all(pickedPokemons.map(poke => getPoke(poke.url))).then(result => console.log(result));
//   }
// }

// export default usePokemonData;

import { useState, useEffect } from 'react';

function usePokemonData(pickedPokemons) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    console.log("started usePokemonData");

    async function getPoke(pickedPokemons) {
      const responses = await Promise.all(pickedPokemons.map(poke => fetch(poke.url)));
      console.log(responses);
      const result = await Promise.all(responses.map(response => response.json()));
      console.log(result);

      return result
    }

    if (pickedPokemons && pickedPokemons.length > 1) {
      console.log(pickedPokemons);
      console.log("now i call getPoke");
      getPoke(pickedPokemons).then(result => {
        if (!ignore) {
          setData(result);
          console.log(result);
        }
      });

      return () => {
        ignore = true;
      };
    }
  }, [pickedPokemons]);

  console.log("===================");
  console.log(pickedPokemons);
  console.log("===================");
  return data;
}

export default usePokemonData;
