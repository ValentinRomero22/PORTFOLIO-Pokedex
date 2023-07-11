import { useContext } from "react"
import { NotificationContext } from "../context/PokemonContext"

/* export const useNotification = () => {
    return useContext(NotificationContext)
} */

export default function useNotification(){
    return useContext(NotificationContext)
}