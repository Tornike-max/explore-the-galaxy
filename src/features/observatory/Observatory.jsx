import { useState } from "react"
import Spinner from "../../ui/Spinner"
import { useObservatory } from "./useObservatory"
import CreateObservatoryModal from "../../ui/CreateObservatoryModal"
import { HiOutlinePencil, HiOutlineXCircle } from "react-icons/hi2";
import { useDeleteObservatory } from "./useDeleteObservatory";
import { useNavigate, useSearchParams } from "react-router-dom";


function Observatory() {
    const [searchParams, setSearchParams] = useSearchParams()
    const { data, isLoading } = useObservatory()
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false)
    const { mutate, isLoading: isDeleting } = useDeleteObservatory()
    const navigate = useNavigate()

    const editId = searchParams.get('edit') || ''
    console.log(editId)

    const handleShowModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    function handleDelete(id) {
        mutate(id)
    }

    function handleEdit(id) {
        searchParams.set('edit', id)
        setSearchParams(searchParams)
        console.log(id)
        setIsEditOpen(true)
        navigate(`/observatories/${id}`)

    }



    if (isLoading || isDeleting) return <Spinner />
    console.log(data)

    return (
        <>
            <div className="container mx-auto mt-8">
                <div className='flex justify-center items-center mb-4 bg-slate-200 rounded-md py-2 text-purple-500'>
                    <h1 className="text-3xl font-semibold mb-4">Observatories</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((observatory, index) => (
                        <div key={index} className="relative bg-white border border-gray-300 rounded p-4 shadow">
                            {/* Edit button in top-left corner */}
                            <button onClick={() => handleEdit(observatory.id)} className="absolute top-2 left-2 bg-white border rounded-full px-2 py-2 text-blue-500 text-xl">
                                <HiOutlinePencil />
                            </button>

                            <button onClick={() => handleDelete(observatory.id)} className="absolute top-2 right-2 bg-white border rounded-full px-2 py-2 text-red-500 text-xl">
                                <HiOutlineXCircle />
                            </button>

                            <img
                                src={observatory.image}
                                alt={observatory.observatory_name}
                                className="w-full h-48 object-cover mb-4 rounded-md hover:rounded-lg transition-all duration-300"
                            />
                            <h2 className="text-xl font-semibold">{observatory.observatory_name}</h2>
                            <p className="text-gray-600">{observatory.location}</p>
                            <p className="text-gray-700 mt-2">{observatory.description}</p>
                            <button>
                                <a href={observatory.link} className="text-blue-500 mt-2 inline-block">Find out in detail on the official website</a>
                            </button>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center my-4'>
                    <button onClick={handleShowModal} className="py-2 px-3 bg-purple-500 hover:bg-purple-600 transition-colors duration-300 rounded-md text-slate-200">
                        Add new observatory
                    </button>
                </div>
            </div>

            {isOpen && <CreateObservatoryModal onClose={handleCloseModal} isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>

    )
}

export default Observatory
