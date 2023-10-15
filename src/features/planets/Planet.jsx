import { Link, useParams } from "react-router-dom"
import { useGetPlanet } from "./useGetPlanet"
import Spinner from "../../ui/Spinner"

function Planet() {
    const { planetId } = useParams()
    const { data: planet, isLoading } = useGetPlanet(planetId)
    console.log(planetId)

    if (isLoading) return <Spinner />
    console.log(planet)
    const singlePlanet = planet[0] && planet[0]

    return <div className="h-screen bg-cover bg-center px-6" style={{ backgroundImage: `url(${singlePlanet.image})` }}>
        <div className="flex flex-col h-screen justify-center items-center bg-opacity-70 bg-black text-white">
            <h1 className="text-5xl font-bold mb-4 capitalize">{singlePlanet.name}</h1>
            <div className="bg-white bg-opacity-20 p-6 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-lg">{singlePlanet.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Key Facts</h2>
                    <ul>
                        <li><strong>Distance from Sun:</strong> {singlePlanet.distance_from_sun_km} Km</li>
                        <li><strong>Diameter:</strong> {singlePlanet.diameter} Km</li>
                        <li><strong>Gravity:</strong> {singlePlanet.gravity}</li>
                        <li><strong>Orbital Period:</strong> {singlePlanet.orbitalPeriod}</li>
                        <li><strong>Rotation Period:</strong> {singlePlanet.rotationPeriod}</li>
                    </ul>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Atmosphere & Features</h2>
                    <ul>
                        <li><strong>Atmosphere:</strong> {singlePlanet.atmosphere}</li>
                        <li><strong>Rings:</strong> {singlePlanet.rings}</li>
                        <li><strong>Magnetic Field:</strong> {singlePlanet.magneticField}</li>
                    </ul>
                </div>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-md mt-4">
                <h1>Nasa link: <span className='underline'><a href={`${singlePlanet.link}`}>Click here to see complete information about the planet</a></span></h1>
            </div>
            <div className="mt-6">
                <Link to="/planets" className="text-lg underline">Back to Planets</Link>
            </div>
        </div>
    </div>

}

export default Planet


