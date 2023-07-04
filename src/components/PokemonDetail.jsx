import React, { useState } from "react"
import { capitalFirstLetter } from '../helpers/capitalFirstLetter'
import pokebola from '../assets/pokebola.png'

const PokemonDetail = ({ pokemon }) => {
    return (
        <div className="pokemonDetailMainContainer">
            <h2>#{pokemon.id} - {capitalFirstLetter(pokemon.name)}</h2>
            <div className="pokemonTypeMainContainer">
                {
                    pokemon.types.map(t => (
                        <div key={t.type.name} className="pokemonTypeContainer">
                            <p>{capitalFirstLetter(t.type.name)}</p>
                            <div className={`pokemonType ${t.type.name}`}></div>
                        </div>
                    ))
                }
            </div>
            <div className="pokemonDetailContainer">
                <div className="pokemonDetailImageAndTypeContainer">
                    {
                        pokemon.sprites.other.home.front_default
                            ? <img src={pokemon.sprites.other.home.front_default} alt={`Imagen ${capitalFirstLetter(pokemon.name)}`} />
                            : <img src={pokebola} alt={`Pokebola`} />
                    }
                </div>
                <div className="pokemonDetailStatsContainer">
                    <div className="pokemonSimpleStats">
                        <div className="pokemonStatNameContainer">
                            <p>Altura</p>
                        </div>
                        <div className="pokemonStatContentContainer">
                            <p>{pokemon.height}</p>
                        </div>
                        <div className="pokemonStatValueContainer"></div>
                    </div>
                    <div className="pokemonSimpleStats">
                        <div className="pokemonStatNameContainer">
                            <p>Peso</p>
                        </div>
                        <div className="pokemonStatContentContainer">
                            <p>{pokemon.weight}</p>
                        </div>
                        <div className="pokemonStatValueContainer"></div>
                    </div>
                    <div className="pokemonStats">
                        <div className="pokemonStatNameContainer">
                            <p>Puntos de sangre</p>
                        </div>
                        <div className="pokemonStatContentContainer">
                            <div className="pokemonStateContent" style={{ width: pokemon.stats[0].base_stat + '%' }}></div>
                        </div>
                        <div className="pokemonStatValueContainer">
                            <p>{pokemon.stats[0].base_stat}</p>
                        </div>
                    </div>
                    <div className="pokemonStats">
                        <div className="pokemonStatNameContainer">
                            <p>Ataque</p>
                        </div>
                        <div className="pokemonStatContentContainer">
                            <div className="pokemonStateContent" style={{ width: pokemon.stats[1].base_stat + '%' }}></div>
                        </div>
                        <div className="pokemonStatValueContainer">
                            <p>{pokemon.stats[1].base_stat}</p>
                        </div>
                    </div>
                    <div className="pokemonStats">
                        <div className="pokemonStatNameContainer">
                            <p>Defensa</p>
                        </div>
                        <div className="pokemonStatContentContainer">
                            <div className="pokemonStateContent" style={{ width: pokemon.stats[2].base_stat + '%' }}></div>
                        </div>
                        <div className="pokemonStatValueContainer">
                            <p>{pokemon.stats[2].base_stat}</p>
                        </div>
                    </div>
                    <div className="pokemonStats">
                        <div className="pokemonStatNameContainer">
                            <p>Ataque especial</p>
                        </div>
                        <div className="pokemonStatContentContainer">
                            <div className="pokemonStateContent" style={{ width: pokemon.stats[3].base_stat + '%' }}></div>
                        </div>
                        <div className="pokemonStatValueContainer">
                            <p>{pokemon.stats[3].base_stat}</p>
                        </div>
                    </div>
                    <div className="pokemonStats">
                        <div className="pokemonStatNameContainer">
                            <p>Defensa especial</p>
                        </div>
                        <div className="pokemonStatContentContainer">
                            <div className="pokemonStateContent" style={{ width: pokemon.stats[4].base_stat + '%' }}></div>
                        </div>
                        <div className="pokemonStatValueContainer">
                            <p>{pokemon.stats[4].base_stat}</p>
                        </div>
                    </div>
                    <div className="pokemonStats">
                        <div className="pokemonStatNameContainer">
                            <p>Velocidad</p>
                        </div>
                        <div className="pokemonStatContentContainer">
                            <div className="pokemonStateContent" style={{ width: pokemon.stats[5].base_stat + '%' }}></div>
                        </div>
                        <div className="pokemonStatValueContainer">
                            <p>{pokemon.stats[5].base_stat}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail