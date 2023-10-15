import { HiMiniArrowRightOnRectangle, HiOutlineMoon, HiOutlineSun, HiOutlineUser } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { useLogout } from "../features/users/useLogout"
import { useLightMode } from "../features/context/ContextLightMode"
import Spinner from "./Spinner"

function UserBox() {
    const navigate = useNavigate()
    const { mutate, isLoading } = useLogout()
    const { isOpen, handleChange } = useLightMode()

    if (isLoading) return <Spinner />
    return (
        <div className="flex justify-between items-center gap-2 font-semibold">
            <span onClick={() => navigate('/account')} className={`${!isOpen ? 'text-purple-400 hover:text-purple-500' : 'text-purple-700 hover:text-purple-800'} duration-200 transition-colors text-sm sm:text-md md:text-lg cursor-pointer`}> <HiOutlineUser /></span>
            <span onClick={() => handleChange()} className={`${!isOpen ? 'text-purple-400 hover:text-purple-500' : 'text-purple-700 hover:text-purple-800'} duration-200 transition-colors text-sm sm:text-md md:text-lg cursor-pointer`}>{isOpen ? <HiOutlineMoon /> : <HiOutlineSun />}</span>
            <span onClick={() => mutate()} className={`${!isOpen ? 'text-purple-400 hover:text-purple-500' : 'text-purple-700 hover:text-purple-800'} duration-200 transition-colors text-sm sm:text-md md:text-lg cursor-pointer`}><HiMiniArrowRightOnRectangle /></span>
        </div>
    )
}

export default UserBox
