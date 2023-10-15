import { useNavigate, useParams } from "react-router-dom"
import { useSingleService } from "./useSingleService"
import Spinner from "../../ui/Spinner"

function ServiceDescription() {
    const params = useParams()
    const { data, isLoading } = useSingleService(params.serviceId)
    const navigate = useNavigate()

    if (isLoading) return <Spinner />
    const {
        availability,
        discount,
        duration,
        feedback,
        location,
        max_group_size,
        oldPrice,
        quality,
        service_description,
        weather_policy
    } = data[0];

    return (
        <div className="bg-gray-100 p-6 md:p-10">
            <button onClick={() => navigate(-1)} className='py-2 px-3 bg-purple-500 hover:bg-purple-600 duration-200 transition-colors rounded-md mb-4 text-slate-200 font-medium'>Go Back</button>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
                <h1 className="text-3xl font-semibold text-purple-600">
                    Stargazing Tour Experience
                </h1>
                <p className="text-gray-700 mt-4">{service_description}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
                <h2 className="text-xl font-semibold text-purple-600">
                    Key Information
                </h2>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>Availability: {availability}</li>
                    <li>Location: {location}</li>
                    <li>Duration: {duration} hours</li>
                    <li>Max Group Size: Up to {max_group_size} participants</li>
                    <li>Price: ${oldPrice - discount} (Original Price: ${oldPrice})</li>
                    <li>Quality: {quality}</li>
                </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
                <h2 className="text-xl font-semibold text-purple-600">
                    Weather Policy
                </h2>
                <p className="text-gray-700 mt-4">{weather_policy}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
                <h2 className="text-xl font-semibold text-purple-600">
                    Customer Feedback
                </h2>
                <p className="text-gray-700 mt-4">{feedback}</p>
            </div>
        </div>
    );
}

export default ServiceDescription
