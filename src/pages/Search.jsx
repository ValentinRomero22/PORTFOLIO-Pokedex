import React, { useContext } from "react"
import { useLocation } from "react-router-dom"
import { PokemonContext } from "../context/PokemonContext"
import PokemonCard from "../components/PokemonCard"
import Footer from "../components/Footer"

export const Search = () => {
    const location = useLocation()

    const { allPokemons } = useContext(PokemonContext)

    const filteredPokemons = allPokemons.filter( pokemon => 
        pokemon.name.includes(location.state.toLowerCase())
    )

    return (
        <>
            <div className="homeContainer">
                {
                    filteredPokemons.length > 0 ?
                    <>
                        <div className="labelSearchContainer">
                            <p>Se encontraron {filteredPokemons.length} pokemones</p>
                        </div>
                        <div className="cardListContainer">
                            {
                                filteredPokemons.map(pokemon => (
                                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                                ))
                            }
                        </div>
                    </> :
                    <>
                        <div className="labelSearchContainer">
                            <p>No se encontraron pokemones con la búsqueda "{location.state}"</p>
                        </div>
                    </>
                }
            </div>
            <Footer />
        </>
    )
}