import { NavLink } from "react-router-dom"
import UserBox from "./UserBox"
import { useLightMode } from "../features/context/ContextLightMode"

function MainNav() {
    const { isOpen } = useLightMode()
    return (
        <>
            <li className={`${isOpen ? 'hover:text-purple-500' : 'hover:text-purple-900'} font-semibold transition-colors duration-200`}>
                <NavLink to='/'>Home</NavLink>
            </li >
            <li className={`${isOpen ? 'hover:text-purple-500' : 'hover:text-purple-900'} font-semibold transition-colors duration-200`}>
                <NavLink to='/planets'>Planets</NavLink>
            </li>
            <li className={`${isOpen ? 'hover:text-purple-500' : 'hover:text-purple-900'} font-semibold transition-colors duration-200`}>
                <NavLink to='/services'>Services</NavLink>
            </li>
            <li className={`${isOpen ? 'hover:text-purple-500' : 'hover:text-purple-900'} font-semibold transition-colors duration-200`}>
                <NavLink to='/bookings'>Bookings</NavLink>
            </li>
            <li className={`${isOpen ? 'hover:text-purple-500' : 'hover:text-purple-900'} font-semibold transition-colors duration-200`}>
                <NavLink to='/observatories'>Observatories</NavLink>
            </li>
            <li className={`${isOpen ? 'hover:text-purple-500' : 'hover:text-purple-900'} font-semibold transition-colors duration-200`}>
                <NavLink to='/about'>About</NavLink>
            </li>
            <UserBox />
        </>
    )
}

export default MainNav
