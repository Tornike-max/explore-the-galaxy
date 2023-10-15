import { createContext, useContext, useState } from "react"

const ContextLightMode = createContext()

function ContextMode({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    function handleChange() {
        setIsOpen(open => !open)
    }

    return (
        <ContextLightMode.Provider value={{ setIsOpen, isOpen, handleChange }}>
            {children}
        </ContextLightMode.Provider>
    )
}


export function useLightMode() {
    const context = useContext(ContextLightMode)
    if (context === undefined) throw new Error("you use contextMode outside of the context")
    return context
}

export default ContextMode
