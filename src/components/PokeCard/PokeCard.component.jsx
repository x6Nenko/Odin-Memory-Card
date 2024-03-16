import "./PokeCard.style.css"

const PokeCard = (poke) => {
  return (
    <article 
      className="card"
      onClick={poke.handleClick}
    >
      <img
        src={poke.pokeData.sprites.other.dream_world.front_default}
        alt=''
      />
      <h2>{poke.pokeData.name}</h2>
    </article>
  )
}

export default PokeCard