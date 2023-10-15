import { useForm } from "react-hook-form"
import { useOutsideClick } from "./useOutsideClick"
import { useCreateObservatory } from "../features/observatory/useCreateObservatory";
import Spinner from "./Spinner";

function CreateObservatoryModal({ isOpen, onClose, setIsOpen }) {
    const { register, handleSubmit } = useForm();
    const { ref } = useOutsideClick(setIsOpen)
    const { mutate, isLoading } = useCreateObservatory()

    function onSubmit(data) {
        if (!data) return;
        const image = data?.image[0]
        console.log(image)
        console.log(data)
        mutate({ ...data, image: image })
    }

    if (isLoading) return <Spinner />
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300 backdrop-filter backdrop-blur-md`}>
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
            <div ref={ref} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg z-10 w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center mb-4">Edit Observatory</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label className="block text-gray-600 mb-2 font-semibold">Observatory Name</label>
                        <input type='text' id='observatory_name' {...register('observatory_name', {
                            required: 'This field is required',
                        })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 mb-2 font-semibold">Location</label>
                        <input type='text' id='location' {...register('location', {
                            required: 'This field is required'
                        })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 mb-2 font-semibold">Description</label>
                        <textarea
                            {...register('description', {
                                required: 'This field is required'
                            })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 mb-2 font-semibold">Link</label>
                        <input type='text' id='link' {...register('link', {
                            required: 'This field is required'
                        })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 mb-2 font-semibold">Image</label>
                        <input
                            type="file"
                            id='image'
                            {...register('image', {
                                required: 'This field is required',
                            })}
                            className="w-full"
                        />
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-2 text-md">
                        <button onClick={() => onClose()}
                            className="bg-purple-500 hover:bg-purple-600 text-slate-200 font-semibold py-1 px-2 rounded-lg w-full"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="bg-purple-500 hover:bg-purple-600 text-slate-200 font-semibold py-1 px-2 rounded-lg w-full"
                        >
                            Create Observatory
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default CreateObservatoryModal
