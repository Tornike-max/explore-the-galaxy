import { useForm } from "react-hook-form"
import { useUpdateObservatory } from "../features/observatory/useUpdateObservatory";
import { useSingleObservatory } from "../features/observatory/useSingleObservatory";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";

function UpdateObservatoryModal({ onClose, }) {
    const navigate = useNavigate()
    const params = useParams('edit')
    console.log(params)
    const { observatory = {}, isLoading: isGettingObservatory } = useSingleObservatory(params.editId)
    const { edit, isEditing } = useUpdateObservatory()
    console.log(observatory)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            observatory_name: observatory?.observatory_name || "",
            description: observatory?.description || "",
            location: observatory?.location || "",
            link: observatory?.link || "",
        },
    });



    function onSubmit(data) {
        if (!data) return;
        console.log(data)
        const image = data?.image[0]
        // edit({ editValus: { ...data, image: image }, id: params.editId })
        edit({ editValus: { ...data, image: image }, id: params.editId })

    }

    if (isGettingObservatory || isEditing) return <Spinner />

    return (
        <div className='bg-slate-200 max-w-4xl w-full p-6 rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2 font-semibold" htmlFor="observatory_name">Observatory Name</label>
                    <input
                        type="text"
                        id='observatory_name'
                        {...register('observatory_name')}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2 font-semibold" htmlFor="location">Location</label>
                    <input
                        type='text'
                        id='location'
                        {...register('location')}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2 font-semibold" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        {...register('description')}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2 font-semibold" htmlFor="link">Link</label>
                    <input
                        type='text'
                        id='link'
                        {...register('link')}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2 font-semibold" htmlFor="image">Image</label>
                    <input
                        type="file"
                        id='image'
                        {...register('image')}
                        className="w-full"
                    />
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <button onClick={() => navigate('/observatories')} className="bg-purple-500 hover:bg-purple-600 text-slate-200 font-semibold py-2 px-4 rounded-lg">
                        Close
                    </button>
                    <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-slate-200 font-semibold py-2 px-4 rounded-lg">
                        Update Observatory
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateObservatoryModal
