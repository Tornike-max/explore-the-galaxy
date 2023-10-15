import { useNavigate } from "react-router-dom"
import FunnelChartComponent from "../charts/FunnelChart"
import { useLightMode } from "../context/ContextLightMode"

function Landings() {
    const navigate = useNavigate()
    const { isOpen } = useLightMode()

    return (
        <>
            <div className='flex justify-between items-center mx-6'>
                <div className={`w-full max-h-[350px] h-full flex flex-col px-8 py-4 ${!isOpen ? 'text-slate-100' : 'text-purple-800'} font-semibold gap-1`}>
                    <span className="text-2xl">Explore the Universe with <span className={`${isOpen ? 'text-purple-500' : 'text-purple-400'} text-2xl`}>Galaxy</span></span>
                    <p className="text-2xl">Discover <span className={`${'text-purple-500'} text-2xl`}>Mysteries</span></p>
                    <div className="flex flex-col justify-start gap-2">
                        <p className='text-[7px] sm:text-sm md:text-md pt-2'>Your journey to the stars begins here. We provide a portal to the wonders of the cosmos, guiding you through galaxies, nebulae, and celestial phenomena with the utmost precision and clarity.</p>
                    </div>
                    <div className='flex justify-start items-start pt-4'>
                        <button onClick={() => navigate('/planets')} className='py-1 px-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition-all duration-200'>Start Exploring</button>
                    </div>
                    <div className="mt-8 flex items-center justify-between max-w-[100px] w-full">
                        <img
                            className="h-6 w-6 cursor-pointer hover:bg-purple-700 transition-all duration-200 bg-purple-500 text-slate-100 rounded-full shake"
                            src="./planet.png"
                            alt="Planet"
                        />
                        <img
                            className="h-6 w-6 cursor-pointer hover:bg-purple-500 transition-all duration-200 bg-purple-500 text-slate-100 rounded-full shake"
                            src="./moon.png"
                            alt="Moon"
                        />
                    </div>
                </div>
                <div className="pt-10 mt-24 max-h-[350px] flex items-end">
                    <img src='./cosmo.png' alt='Cosmo' />
                </div>
            </div>

            <div className="mt-32 m-auto max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl w-screen">
                <FunnelChartComponent />
            </div>



            {/* Additional Information Section */}
            <div className={`${!isOpen ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-800 hover:bg-purple-900'} mb-4 duration-300 transition-colors text-slate-100 p-6 mt-8 mx-6 rounded-lg shadow-lg`}>
                <h2 className="text-2xl font-semibold mb-4">Why Choose Galaxy for Your Space Journey?</h2>
                <ul className="list-disc pl-6">
                    <li>Expert Guidance from Renowned Astronomers</li>
                    <li>Access to Cutting-Edge Telescopes and Observatories</li>
                    <li>Exclusive Tours to Cosmic Phenomena</li>
                    <li>Educational Programs for All Ages</li>
                    <li>Community of Space Enthusiasts</li>
                </ul>
            </div>
        </>


    )
}

export default Landings
