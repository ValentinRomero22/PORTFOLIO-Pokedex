import React, { useContext, useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import Loader from "../components/Loader"
import PokemonDetail from '../components/PokemonDetail'
import Footer from "../components/Footer"

export const Detail = () => {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)
    
    const { getPokemonById } = useContext(PokemonContext)

    const getPokemon = async(id) => {
        const data = await getPokemonById(id)
        setPokemon(data)
        setLoading(false)
    }

    useEffect(() => {
        getPokemon(id)
    }, [])

    return (
        <>
            {
                loading ?
                    <Loader /> :
                    <>
                        <div className="detailContainer">
                            <PokemonDetail pokemon={pokemon} />
                        </div>
                    </>
            }
            <Footer />
        </>
    )
}