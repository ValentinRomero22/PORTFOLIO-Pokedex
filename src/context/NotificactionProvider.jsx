import React, { useCallback, useState } from "react"
import { NotificationContext } from "./PokemonContext"

export const NotificationProvider = ({ children }) => {
    const [messages, setMessages] = useState([])

    const addNotification = useCallback(
        function (newMessage) {
            setMessages((messages) => [...messages, newMessage])
            setTimeout(() =>
                setMessages((messages) => messages.slice(1))
                , 2000)
        }, [setMessages]
    )

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div className="notificationContainer">
                {
                    messages.map(msg => (
                        <div className="notification" key={msg}>
                            {msg}
                        </div>
                    ))
                }
            </div>
        </NotificationContext.Provider>
    )
}