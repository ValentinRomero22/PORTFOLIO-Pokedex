import React, { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import PokemonList from "../components/PokemonList"
import Footer from "../components/Footer"

export const Home = () => {
    return (
        <>
            <div className="homeContainer">
                <PokemonList />
            </div>
            <Footer />
        </>
    )
}