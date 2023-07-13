import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"

const PokemonFilter = () => {
    const { active, handleCheckbox, type } = useContext(PokemonContext)

    return (
        <div className={`filterContainer ${active ? 'filterOn' : ''}`}>
            <span className="filterCaption">Filtrar por tipo</span>
            <div className="filter">
                <input
                    checked={type.steel ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="steel"
                    id="steel"
                    className="filterCheckbox">
                </input>
                <span>Acero</span>
            </div>
            <div className="filter">
                <input
                    checked={type.water ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="water"
                    id="water"
                    className="filterCheckbox">
                </input>
                <span>Agua</span>
            </div>
            <div className="filter">
                <input
                    checked={type.bug ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="bug"
                    id="bug"
                    className="filterCheckbox">
                </input>
                <span>Bicho</span>
            </div>
            <div className="filter">
                <input
                    checked={type.dragon ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="dragon"
                    id="dragon"
                    className="filterCheckbox">
                </input>
                <span>Dragon</span>
            </div>
            <div className="filter">
                <input
                    checked={type.electric ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="electric"
                    id="electric"
                    className="filterCheckbox">
                </input>
                <span>Eléctrico</span>
            </div>
            <div className="filter">
                <input
                    checked={type.ghost ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="ghost"
                    id="ghost"
                    className="filterCheckbox">
                </input>
                <span>Fantasma</span>
            </div>
            <div className="filter">
                <input
                    checked={type.fire ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="fire"
                    id="fire"
                    className="filterCheckbox">
                </input>
                <span>Fuego</span>
            </div>
            <div className="filter">
                <input
                    checked={type.fairy ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="fairy"
                    id="fairy"
                    className="filterCheckbox">
                </input>
                <span>Hada</span>
            </div>
            <div className="filter">
                <input
                    checked={type.ice ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="ice"
                    id="ice"
                    className="filterCheckbox">
                </input>
                <span>Hielo</span>
            </div>
            <div className="filter">
                <input
                    checked={type.fighting ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="fighting"
                    id="fighting"
                    className="filterCheckbox">
                </input>
                <span>Lucha</span>
            </div>
            <div className="filter">
                <input
                    checked={type.normal ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="normal"
                    id="normal"
                    className="filterCheckbox">
                </input>
                <span>Normal</span>
            </div>
            <div className="filter">
                <input
                    checked={type.dark ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="dark"
                    id="dark"
                    className="filterCheckbox">
                </input>
                <span>Oscuridad</span>
            </div>
            <div className="filter">
                <input
                    checked={type.grass ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="grass"
                    id="grass"
                    className="filterCheckbox">
                </input>
                <span>Pasto</span>
            </div>
            <div className="filter">
                <input
                    checked={type.psychic ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="psychic"
                    id="psychic"
                    className="filterCheckbox">
                </input>
                <span>Psíquico</span>
            </div>
            <div className="filter">
                <input
                    checked={type.rock ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="rock"
                    id="rock"
                    className="filterCheckbox">
                </input>
                <span>Roca</span>
            </div>
            <div className="filter">
                <input
                    checked={type.shadow ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="shadow"
                    id="shadow"
                    className="filterCheckbox">
                </input>
                <span>Sombra</span>
            </div>
            <div className="filter">
                <input
                    checked={type.ground ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="ground"
                    id="ground"
                    className="filterCheckbox">
                </input>
                <span>Tierra</span>
            </div>
            <div className="filter">
                <input
                    checked={type.poison ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="poison"
                    id="poison"
                    className="filterCheckbox">
                </input>
                <span>Veneno</span>
            </div>
            <div className="filter">
                <input
                    checked={type.flying ? true : false}
                    type="checkbox"
                    onChange={handleCheckbox}
                    name="flying"
                    id="flying"
                    className="filterCheckbox">
                </input>
                <span>Volador</span>
            </div>
        </div>
    )
}

export default PokemonFilter