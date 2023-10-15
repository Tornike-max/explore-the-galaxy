import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function ServiceCard({ service }) {
    const navigate = useNavigate()


    function handleSelect() {
        navigate(`/services/${service.id}`)
    }
    console.log(service)
    return (
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:cursor-pointer">
            <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-green-500 uppercase">{service.quality}</span>
                <span className="text-xs font-semibold text-purple-500 uppercase">Quality Level</span>
            </div>
            <div className='pb-6 flex justify-end items-center'>
                <button onClick={handleSelect} className='flex justify-center items-center bg-purple-400 hover:bg-purple-500 duration-200 transition-colors rounded-md py-1 px-2 text-slate-100'>Select</button>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-gray-700 text-sm">Price</p>
                    <p className="text-2xl font-bold text-purple-500">
                        {formatCurrency(service.price)}
                        <span className="text-sm line-through text-gray-500 ml-2">{formatCurrency(service.oldPrice)}</span>
                    </p>
                </div>
                <div>
                    <p className="text-gray-700 text-sm">Duration</p>
                    <p className="text-gray-600">{service.duration} Hours</p>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-gray-700 text-sm">Availability</p>
                    <p className="text-gray-600">{service.availability}</p>
                </div>

            </div>
            <div className="mb-2">
                <p className="text-gray-700 text-sm">Guest Feedback</p>

                <p className="text-gray-600 mb-1">
                    {service.feedback}
                </p>

            </div>

        </div>
    );
}

export default ServiceCard
