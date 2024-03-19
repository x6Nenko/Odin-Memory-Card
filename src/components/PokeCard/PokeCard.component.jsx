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
      <div className="card-footer">
        <h2>{poke.pokeData.name}</h2>
      </div>
    </article>
  )
}

export default PokeCard