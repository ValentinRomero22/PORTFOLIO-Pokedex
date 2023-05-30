import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import Loader from "./Loader"
import PokemonCard from "./PokemonCard"

const PokemonList = () => {
    const { loading, pokemons, filteredPokemons } = useContext(PokemonContext)

    return (
        <>
            {
                loading ?
                    <Loader /> :
                    <div className="cardListContainer">
                        { filteredPokemons.length ? (
                            <> 
                                {
                                    filteredPokemons.map(pokemon => (
                                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                                    ))
                                } 
                            </> ) : (                            
                            <> 
                                {
                                    
                                    pokemons.map(pokemon => (
                                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                                    ))
                                } 
                            </> )
                        }
                    </div>
            }
        </>
    )
}

export default PokemonList