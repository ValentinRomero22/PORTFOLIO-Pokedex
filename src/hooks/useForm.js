import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)
    
    const onInputChange = ({target}) => { // desestructura el target del evento --> e.target
        const { name, value } = target

        setFormState({
            ...formState, [name]: value
        })
    }

    const onResetForm = () => { // solamente reinicia el formulario
        setFormState(initialForm)
    }

    return {
        ...formState, formState, onInputChange, onResetForm
    }
}