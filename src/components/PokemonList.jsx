import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import Loader from "./Loader"
import PokemonCard from "./PokemonCard"
import PokemonFilter from "../components/PokemonFilter"
import errorImage from "../assets/error.png"

const PokemonList = () => {
    const { loading, pokemons, filteredPokemons, onClickLoadMore, setActive, active, error } = useContext(PokemonContext)

    if (error) {
        return (
            <div className="errorContainer">
                <img src={errorImage} alt="Logo error" />
                <p>Ocurrió un error inesperado</p>
            </div>
        )
    }

    return (
        <>
            <div className="botonFilterContainer">
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='filterIcon'
                    onClick={() => setActive(!active)}>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                    />
                </svg>
                <span>Filtrar</span>
            </div>
            {
                loading ?
                    <Loader /> :
                    filteredPokemons.length ?
                        <>
                            <div className="cardListContainer">
                                {
                                    filteredPokemons.map(pokemon => (
                                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                                    ))
                                }

                            </div>
                            <PokemonFilter />
                        </> :
                        <>
                            <div className="cardListContainer">
                                {
                                    pokemons.map(pokemon => (
                                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                                    ))
                                }
                            </div>
                            <PokemonFilter />

                            <div className="loadMoreContainer">
                                <button onClick={onClickLoadMore}>
                                    Cargar más
                                </button>
                            </div>
                        </>
            }
        </>
    )
}

export default PokemonList