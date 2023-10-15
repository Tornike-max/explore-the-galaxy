import { useOutsideClick } from "./useOutsideClick";

function ConfirmDelete({ isOpen, onClose, onDelete, resourceName, id }) {
    const { ref } = useOutsideClick(onClose)
    function handleDelete() {
        onDelete(id)

    }


    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } transition-opacity duration-300 backdrop-filter backdrop-blur-md `}
        >
            <div className="absolute inset-0  opacity-60"></div>
            <div ref={ref} className="bg-slate-200 text-slate-700 p-6 rounded-lg shadow-xl z-10 ">
                <div className={`flex flex-col justify-between items-center py-6 px-10 m-auto gap-6 opacity-90`}>
                    <h1>Delete {resourceName}</h1>
                    <p>
                        Are you sure you want to delete this {resourceName} permanently? This
                        action cannot be undone.
                    </p>

                    <div className='flex gap-4'>
                        <button className='py-2 px-4 bg-slate-400 text-slate-800 rounded-md hover:bg-slate-300 hover:text-slate-700 duration-300 transition-colors' onClick={onClose}>Cancel</button>
                        <button className='py-2 px-4 bg-red-500 text-slate-100 rounded-md hover:bg-red-600 hover:text-slate-50 duration-300 transition-colors' onClick={handleDelete}>Delete</button>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default ConfirmDelete;