import { useNavigate, useParams } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import { useBooking } from "./useBooking"
import { HiOutlineCurrencyDollar } from "react-icons/hi2"
import { formatCurrency } from "../../utils/helpers"
import { useCheckin } from "./useCheckin"
import { useCheckout } from "./useCheckout"
import { useDeleteBooking } from "./useDeleteBooking"
import { useState } from "react"
import ConfirmDelete from "../../ui/ConfirmDelete"


function SingleBooking() {
    const params = useParams()
    const { data, isLoading } = useBooking(params.bookingId)
    const navigate = useNavigate()
    const [isModalOpen, setModalOpen] = useState(false);


    const { mutate, isLoading: isCheckingin } = useCheckin()
    const { checkout, isLoading: isCheckout } = useCheckout()
    const { deleteBooking, isDeleting } = useDeleteBooking()

    if (isLoading) return <Spinner />
    const bookingData = data[0]

    const fullName = bookingData?.guests?.first_name + ' ' + bookingData?.guests?.last_name

    function handleShowModal() {
        setModalOpen(true)
    }
    console.log(data)

    const totalPrice = bookingData.observatoryPrice + bookingData.extrasPrice

    return (
        <>
            <div className="bg-gray-100 p-4 md:p-8 max-w-6xl w-full">
                <button onClick={() => navigate(-1)} className='my-4 bg-purple-500 hover:bg-purple-600 duration-300 transition-colors py-2 px-3 rounded-md text-slate-200'>Go Back</button>
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4">
                    <div className="text-center font-bold">
                        <h1 className="text-3xl font-semibold text-purple-600">
                            Exploring the Cosmos,
                        </h1>
                        <p className="text-3xl font-semibold text-purple-600">
                            One Star at a Time
                        </p>
                    </div>

                    <div className="mt-6 text-center gap-2 flex justify-center items-center font-semibold">
                        <span className="text-lg text-gray-700 font-semibold">Status:</span>
                        <button className={`py-2 px-4 rounded-lg ${bookingData.status === 'checked-in' ? 'bg-green-500 hover:bg-green-600 duration-200 transition-colors text-white' : bookingData.status === 'unconfirmed' ? 'bg-slate-300 hover:bg-slate-400 duration-200 transition-colors text-white' : 'bg-red-500 hover:bg-red-600 duration-200 transition-colors text-white'}`}>
                            {bookingData.status}
                        </button>
                    </div>

                    <div className="mt-6 font-semibold">
                        <div className="text-lg text-gray-700 font-semibold text-center">Guest Information:</div>
                        <div className="mt-2 text-center">
                            <div>
                                <span className="text-lg text-gray-700">Name:</span>
                                <span className="ml-2">{fullName}</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-lg text-gray-700">Email:</span>
                                <span className="ml-2">{bookingData?.guests?.email}</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-lg text-gray-700">National ID:</span>
                                <span className="ml-2">{bookingData?.guests?.nationalId}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center flex justify-center items-center gap-2">
                        <span className="text-lg text-gray-700 font-semibold">Guide Included:</span>
                        <span className={`text-xl font-semibold ${bookingData?.guide ? 'text-green-500' : 'text-red-500'}`}>
                            {bookingData?.guide ? 'Yes' : 'No'}
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center">
                            <span className="text-2xl text-purple-600"><HiOutlineCurrencyDollar className="text-xl" /></span>
                            <span className="text-lg text-gray-700 font-semibold ml-2">
                                Total Price: {formatCurrency(totalPrice)}
                                <span>( {formatCurrency(bookingData.observatoryPrice)} Observatory price + {formatCurrency(bookingData.extrasPrice)} Guide price )</span>
                            </span>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <span className={`font-semibold text-xl ${bookingData.isPaid ? 'text-green-500' : 'text-red-500'}`}>
                            {bookingData.isPaid ? 'Paid' : 'Unpaid'}
                        </span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button onClick={() => navigate(-1)} className="py-2 px-4 font-semibold rounded-md bg-slate-500 hover:bg-slate-600 text-white transition duration-200 mr-2">Back</button>
                    <button onClick={handleShowModal} className="py-2 px-4 font-semibold rounded-md bg-red-500 hover:bg-red-600 text-white transition duration-200 mr-2">Delete</button>
                    {bookingData.status === 'unconfirmed' && <button onClick={() => mutate(bookingData.id)} className="py-2 px-4 font-semibold rounded-md bg-purple-600 hover:bg-purple-700 text-white transition duration-200">Check In</button>}
                    {bookingData.status === 'checked-in' && <button onClick={() => checkout(bookingData.id)} className="py-2 px-4 font-semibold rounded-md bg-purple-600 hover:bg-purple-700 text-white transition duration-200">Check Out</button>}
                </div>
            </div>
            {isModalOpen === true && <ConfirmDelete
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onDelete={deleteBooking}
                resourceName={'Booking'}
                id={bookingData.id}
            />}
        </>
    )
}



export default SingleBooking
