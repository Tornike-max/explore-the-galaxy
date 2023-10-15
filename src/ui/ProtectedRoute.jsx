import { useNavigate } from "react-router-dom"
import { useUser } from "../features/users/useUser"
import Spinner from "./Spinner"

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const { isAuthenticated, isLoading } = useUser()

    if (isLoading) return <Spinner />

    if (!isAuthenticated && !isLoading) navigate('/login')

    return children
}

export default ProtectedRoute
