import { Link } from "react-router-dom"
import Logo from "./Logo"
import MainNav from "./MainNav"
import { useLightMode } from "../features/context/ContextLightMode"

function Header() {
    const { isOpen } = useLightMode()
    return (
        <header className='flex justify-center items-center'>
            <ul className={`flex justify-between items-center max-w-[1920px] w-full py-6 px-2 sm:px-6 md:px-10 text-xs sm:text-sm md:text-[15px] ${!isOpen ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-purple-600'}`}>
                <Link to='/'>
                    <Logo />
                </Link>

                <MainNav />
            </ul>
        </header>
    )
}

export default Header
