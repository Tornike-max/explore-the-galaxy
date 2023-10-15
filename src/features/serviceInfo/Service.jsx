import ServiceCard from "./ServiceCard";
import { useService } from "./useService";
import Spinner from '../../ui/Spinner'

function Service() {
    const { data: services, isLoading } = useService()
    if (isLoading) return <Spinner />
    console.log(services)


    return (
        <div className="bg-slate-200 rounded-md py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-purple-600">Our Services</h2>
                    <p className="mt-4 text-lg text-purple-500">
                        Discover the celestial experiences we offer.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Service
