import { HiOutlinePlus } from "react-icons/hi2";

function PlanetInfo({ name, description, onClick }) {

    return (
        <div onClick={onClick} className={`cursor-pointer bg-slate-200`}>
            <div className={`bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:rounded-lg transition-transform transform hover:scale-105 h-full`}>
                <div className="flex items-center justify-center mb-4">
                    <HiOutlinePlus className={`text-purple-700 w-8 h-8 hover:text-purple-800 duration-300 transition-colors`} />
                </div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2 capitalize">
                    {name}
                </h3>
                <p className="text-purple-600">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default PlanetInfo