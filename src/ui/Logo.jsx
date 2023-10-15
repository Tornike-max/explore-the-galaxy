import { useLightMode } from "../features/context/ContextLightMode"

function Logo() {
    const { isOpen } = useLightMode()
    return (
        <>
            {!isOpen && <img className={`${'text-slate-100'} w-8 h-8 hidden sm:block`} src={'./logo.png' ? './logo.png' : 'Logo'} alt='logo' />}
        </>

    )
}

export default Logo
