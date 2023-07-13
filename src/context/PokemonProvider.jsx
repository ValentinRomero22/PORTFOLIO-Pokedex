import { useEffect, useState, useContext } from "react"
import { PokemonContext } from "./PokemonContext"
import { NotificationContext } from "./PokemonContext"
import { useForm } from "../hooks/useForm"
import { URL } from "../helpers/apiConection"
import { translation } from "../helpers/typesTranslation"

export const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [allPokemons, setAllPokemons] = useState([])
    const [filteredPokemons, setFilteredPokemons] = useState([])
    const [error, setError] = useState(false)

    const [offset, setOffset] = useState(0)

    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)
    const [search, setSearch] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const { addNotification } = useContext(NotificationContext)

    // useForm para extraer
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ''
    })

    useEffect(() => {
        getAllPokemons()
    }, [])

    useEffect(() => {
        getPokemons()
    }, [offset])

    // solo llama a 25 pokemones
    const getPokemons = async (limit = 25) => {
        try {
            const res = await fetch(`${URL}pokemon?limit=${limit}&offset=${offset}`)
            const data = await res.json()

            const promises = data.results.map(async pokemon => {
                const pokemonRes = await fetch(pokemon.url)
                const pokemonData = await pokemonRes.json()
                return pokemonData
            })

            const results = await Promise.all(promises)

            setPokemons([...pokemons, ...results])
            setLoading(false)
        } catch (error) {
            setError(true)
        }
    }

    // llamar a todos los pokemones
    const getAllPokemons = async () => {
        try {
            const res = await fetch(`${URL}pokemon?limit=600&offset=0`)
            const data = await res.json()

            const promises = data.results.map(async pokemon => {
                const pokemonRes = await fetch(pokemon.url)
                const pokemonData = await pokemonRes.json()
                return pokemonData
            })

            const results = await Promise.all(promises)

            setAllPokemons(results)
            setLoading(false)
        } catch {
            setError(true)
        }
    }

    // llamar a un pokemon por id
    const getPokemonById = async (id) => {
        try {
            const res = await fetch(`${URL}pokemon/${id}`)
            const data = await res.json()

            return data
        } catch {
            setError(true)
        }
    }

    const onClickLoadMore = () => {
        setOffset(offset + 25)
    }

    const [type, setType] = useState({
        steel: false,
        water: false,
        bug: false,
        dragon: false,
        eletric: false,
        ghost: false,
        fire: false,
        fairy: false,
        ice: false,
        fighting: false,
        dark: false,
        grass: false,
        psychic: false,
        rock: false,
        shadow: false,
        ground: false,
        poison: false,
        flying: false,
    })

    const handleCheckbox = (e) => {
        setType({ ...type, [e.target.name]: e.target.checked })

        if (e.target.checked) {
            if (filteredPokemons.length == 0) {
                const filteredData = allPokemons.filter(pokemon =>
                    pokemon.types.map(type => type.type.name).includes(e.target.name)
                )

                setFilteredPokemons([...filteredPokemons, ...filteredData])
                addNotification(`Se muestran pokemones de tipo ${translation(e.target.name)}`)
            } else {

                const filteredAuxData = filteredPokemons.filter(pokemon =>
                    !pokemon.types.map(type => type.type.name).includes(e.target.name)
                )

                const filteredData = allPokemons.filter(pokemon =>
                    pokemon.types.map(type => type.type.name).includes(e.target.name)
                )

                setFilteredPokemons([...filteredAuxData, ...filteredData])
                addNotification(`Se agregaron pokemones de tipo ${translation(e.target.name)}`)
            }
        } else {
            const filteredData = filteredPokemons.filter(pokemon =>
                !pokemon.types.map(type => type.type.name).includes(e.target.name)
            )

            setFilteredPokemons([...filteredData])

            filteredData.length ?
                addNotification(`Se quitaron pokemones de tipo ${translation(e.target.name)}`)
                : addNotification('Se eliminaron todos los filtros')

        }
    }

    return (
        <PokemonContext.Provider
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                pokemons,
                allPokemons,
                getPokemonById,
                active,
                setActive,
                onClickLoadMore,
                loading,
                setLoading,
                handleCheckbox,
                filteredPokemons,
                error,
                darkMode,
                setDarkMode,
                search,
                setSearch,
                type
            }}>
            {children}

        </PokemonContext.Provider>
    )
}