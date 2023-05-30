import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm)
    
    const onInputChange = ({target}) => { // desestructura el target del evento --> e.target
        const { name, value } = target

        setformState({
            ...formState, [name]: value
        })
    }

    const onResetForm = () => { // solamente reinicia el formulario
        setformState(initialForm)
    }

    return {
        ...formState, formState, onInputChange, onResetForm
    }
}