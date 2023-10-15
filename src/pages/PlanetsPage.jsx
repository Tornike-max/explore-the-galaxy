import { useNavigate, useSearchParams } from "react-router-dom";
import PlanetInfo from '../features/planets/PlanetInfo'
import { useAllPlanets } from "../features/planets/useAllPlanets";
import Spinner from '../ui/Spinner'

function PlanetsPage() {
    const { data: planets, isLoading } = useAllPlanets()
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    if (isLoading) return <Spinner />
    console.log(planets)

    function handleClick(id) {
        searchParams.set("planetId", id);
        setSearchParams(searchParams);
        navigate(`/planets/${id}`);
    }

    //Connect with Galaxy: Be Interstellar
    return (
        <div className="bg-slate-200 py-12 rounded-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className={`text-3xl font-extrabold text-purple-700`}>Explore the Planets</h2>
                    <p className="mt-4 text-lg text-purple-700">
                        Learn about the different planets in our solar system.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="scrollable-container"> {/* Apply the custom scroll style */}
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {planets.map((planet) => (
                                <PlanetInfo
                                    key={planet.id}
                                    name={planet.name}
                                    description={planet.description}
                                    color={planet.color}
                                    id={planet.id}
                                    onClick={() => handleClick(planet.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlanetsPage
