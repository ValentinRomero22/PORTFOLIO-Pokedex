import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hooks/useForm"

export const PokemonProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const [allPokemons, setAllPokemons] = useState([])
    const [filteredPokemons, setFilteredPokemons] = useState([])

    const [offset, setOffset] = useState(0)

    // estados simples para la aplicación
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    // useForm para extraer
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ''
    })
    
    // solo llama a 25 pokemones
    const getPokemons = async(limit = 25) => {
        const url = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${url}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()

        const promises = data.results.map(async pokemon =>{
            const pokemonRes = await fetch(pokemon.url)
            const pokemonData = await pokemonRes.json()
            return pokemonData
        })

        const results = await Promise.all(promises)
        
        setPokemons([...pokemons, ...results])
        setLoading(false)
    }

    useEffect(() => {
        getPokemons()      
    }, [offset])

    // llamar a todos los pokemones
    const getAllPokemons = async() => {
        const url = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${url}pokemon?limit=1500&offset=0`)
        const data = await res.json()

        const promises = data.results.map(async pokemon => {
            const pokemonRes = await fetch(pokemon.url)
            const pokemonData = await pokemonRes.json()
            return pokemonData
        })

        const results = await Promise.all(promises)
              
        setAllPokemons(results)
        setLoading(false)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    // llamar a un pokemon por id
    const getPokemonById = async() => {
        const url = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${url}pokemon/${id}`)
        const data = await res.json()

        console.log(data) // codear esta parte...
    }

    const onClickLoadMore = () => {
        setOffset(offset + 25)
    }

    const [type, setType] = useState({
        steel: false,
        water: false,
        bug: false,
        unknow: false,
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
        setType({...type, [e.target.name] : e.target.checked})

        if(e.target.checked) {            
            const filteredData = allPokemons.filter(pokemon => 
                pokemon.types.map(type => type.type.name).includes(e.target.name)
            )            

            setFilteredPokemons([...filteredPokemons, ...filteredData])
        } else {
            const filteredData = filteredPokemons.filter(pokemon => 
                !pokemon.types.map(type => type.type.name).includes(e.target.name)
        )

            setFilteredPokemons([...filteredData])
        }
    }

    return (
        <PokemonContext.Provider
            value = {{ 
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
            }}>
                {children}

        </PokemonContext.Provider>
    )
}