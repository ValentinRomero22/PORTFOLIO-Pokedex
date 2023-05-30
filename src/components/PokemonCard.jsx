import React from 'react'
import { capitalFirstLetter } from '../helpers/capitalFirstLetter'
import { Link } from 'react-router-dom'
import pokebola from "../assets/pokebola.png"

const PokemonCard = ({pokemon}) => {
    
    return (
        <>
            <article className='pokemonCard'>
                <div className="pokemonImageContainer">
                    <Link to={`pokemon/${pokemon.id}`}>
                        {
                            pokemon.sprites.other.home.front_default 
                                ? <img src={pokemon.sprites.other.home.front_default} alt={`Imagen ${capitalFirstLetter(pokemon.name)}`} />
                                : <img src={pokebola} alt={`Pokebola`} />
                        }
                    </Link>
                </div>
                {/* <img src={pokemon.sprites.other.dream_world.front_default} alt="Foto pokemon" /> */}
                <span className='pokemonName'>{capitalFirstLetter(pokemon.name)}</span>
                <div className="pokemonTypeContainer">
                    {/* <span key={t.type.name} className={`pokemonType ${t.type.name}`}>
                        {t.type.name}
                    </span> */}
                    {
                        pokemon.types.map(t => (
                            <div key={t.type.name} className={`pokemonType ${t.type.name}`}></div>                            
                        ))
                    }
                </div>
            </article>
        </>
    )
}

export default PokemonCard