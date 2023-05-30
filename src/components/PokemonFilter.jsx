import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"

const PokemonFilter = () => {
    const { active, handleCheckbox } = useContext(PokemonContext)

    return (
        <div className={`filterContainer ${active ? 'filterOn' : ''}`}>
            <span className="filterCaption">Filtrar por tipo</span>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="steel"
                    id="steel">
                </input>
                <span>Acero</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="water"
                    id="water">
                </input>
                <span>Agua</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="bug"
                    id="bug">
                </input>
                <span>Bicho</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="unknow"
                    id="unknow">
                </input>
                <span>Desconocido</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="dragon"
                    id="dragon">
                </input>
                <span>Dragon</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="electric"
                    id="electric">
                </input>
                <span>Eléctrico</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="ghost"
                    id="ghost">
                </input>
                <span>Fantasma</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="fire"
                    id="fire">
                </input>
                <span>Fuego</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="fairy"
                    id="fairy">
                </input>
                <span>Hada</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="ice"
                    id="ice">
                </input>
                <span>Hielo</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="fighting"
                    id="fighting">
                </input>
                <span>Lucha</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="normal"
                    id="normal">
                </input>
                <span>Normal</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="dark"
                    id="dark">
                </input>
                <span>Oscuridad</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="grass"
                    id="grass">
                </input>
                <span>Pasto</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="psychic"
                    id="psychic">
                </input>
                <span>Psíquico</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="rock"
                    id="rock">
                </input>
                <span>Roca</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="shadow"
                    id="shadow">
                </input>
                <span>Sombra</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="ground"
                    id="ground">
                </input>
                <span>Tierra</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="poison"
                    id="poison">
                </input>
                <span>Veneno</span>
            </div>
            <div className="filter">
                <input 
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="flying"
                    id="flying">
                </input>
                <span>Volador</span>
            </div>
        </div>
    )
}

export default PokemonFilter