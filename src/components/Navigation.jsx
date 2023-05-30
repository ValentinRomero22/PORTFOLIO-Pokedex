import { useContext } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { PokemonContext } from "../context/PokemonContext"
import logo from "../assets/logo.png"

export const Navigation = () => {
    const { valueSearch, onInputChange, onResetForm } = useContext(PokemonContext)

    const navigate = useNavigate()

    const onSearchSubmit = e => {
        e.prventDefault()

        navigate('/search', { state: valueSearch })

        onResetForm()
    }

    return(
        <>
            <header>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>

                <form onSubmit={onSearchSubmit}>
                    <div className="searchBox">
                        <svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='searchIcon'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/>
						</svg>
                        <input 
                            type="search" 
                            name="valueSearch"
                            value={valueSearch}
                            onChange={onInputChange}
                            placeholder="Buscar un pokemon por nombre"/>
                    </div>
                    <button>Buscar</button>
                </form>
            </header>
            <Outlet />
        </>
    )
}