import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useLightMode } from "../features/context/ContextLightMode"

function AppLayout() {
    const { isOpen } = useLightMode()
    console.log(isOpen)
    return (
        <div>
            <Header />

            <main className={`flex max-w-[1920px] w-full  min-h-screen ${isOpen ? 'bg-slate-200' : 'bg-slate-900'}`}>
                <div className="flex flex-col justify-between items-center mt-4 w-full h-full">
                    <Outlet />
                </div>
            </main>

            <Footer className="self-end" />
        </div>

    )
}

export default AppLayout
