import React, { useCallback, useState } from "react"
import { NotificationContext } from "./PokemonContext"

export const NotificationProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    
    const addNotification = useCallback(
        function (newMessage) {
            setMessages((messages) => [...messages, newMessage])
            /* setTimeout(() => 
                setMessages((messages) => messages.slice(1))
            , 2000) */
        }, [setMessages]
    )

    const notificationContainer = {
        position: 'absolute',
        top: '100px',
        right: '5%',
        width: 'auto',
        height: 'auto'
    }

    const notification = {
        position: 'relative',
        marginTop: '10px',
        width: 'auto',
        height: 'auto',
        color: 'white',
        backgroundColor: 'linear-gradient(90deg, $firstGradient 25%, $secondGradient 50%, $mainColor 80%)',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '14px'
    }

    return (
        <NotificationContext.Provider value={{addNotification}}>
            { children }
            <div style={notificationContainer}>
                {
                    messages.map(msg => (
                        <div style={notification} key={msg}>
                            {msg}
                        </div>
                    ))
                }
            </div>
        </NotificationContext.Provider>
    )
}