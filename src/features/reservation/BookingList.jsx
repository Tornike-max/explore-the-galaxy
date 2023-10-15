import { useNavigate } from "react-router-dom"
import { formatCurrency } from "../../utils/helpers"
import { HiEye, HiMiniCloudArrowUp, HiOutlineCheckBadge, HiOutlineTrash } from "react-icons/hi2"
import { useCheckin } from "./useCheckin"
import { useCheckout } from "./useCheckout"
import { useDeleteBooking } from "./useDeleteBooking"
import Spinner from "../../ui/Spinner"


function BookingList({ booking }) {
    const navigate = useNavigate()
    const { mutate, isLoading } = useCheckin()
    const { checkout, isLoading: isCheckout } = useCheckout()
    const { deleteBooking, isDeleting } = useDeleteBooking()

    // useEffect(() => {

    // }, [booking])

    function handleShowDetails(id) {
        if (!id) return;
        navigate(`/booking/${id}`)
    }

    function handleCheckedin(id) {
        if (!id) return;
        console.log(id)
        mutate(id)
    }

    function handleCheckout(id) {
        if (!id) return;
        checkout(id)
    }

    function handleDeleteBooking(id) {
        if (!id) return;
        deleteBooking(id)
    }

    if (isLoading || isCheckout || isDeleting) return <Spinner />
    return (
        <div key={booking.id} className="grid grid-cols-6 gap-6 items-center text-slate-600 border-b-2 border-slate-300 text-xs sm:text-sm md:text-md">
            <div>{booking.guests.first_name}</div>
            <div>{booking.numGuest} Guests</div>
            <div>{booking.numHours} Hours</div>
            <div className='text-green-500'>{formatCurrency(booking.totalPrice)}</div>
            <div className='text-green-500'>{formatCurrency(booking.service.discount)}</div>
            <div className='flex justify-center items-center gap-2'>
                <button onClick={() => handleShowDetails(booking.id)} className='text-blue-500 hover:text-blue-700 duration-300 transition-all text-xs hover:text-sm sm:text-sm hover:sm:text-[15px] md:text-[17px] md:hover:text-xl'><HiEye /></button>
                {booking.status === 'unconfirmed' && <button onClick={() => handleCheckedin(booking.id)} className='text-green-500 hover:text-green-700 duration-300 transition-all text-xs hover:text-sm sm:text-sm hover:sm:text-[15px] md:text-[17px] md:hover:text-xl'><HiOutlineCheckBadge /></button>}
                {booking.status === 'checked-in' && <button onClick={() => handleCheckout(booking.id)} className='text-red-500 hover:text-red-700 duration-300 transition-all text-xs hover:text-sm sm:text-sm hover:sm:text-[15px] md:text-[17px] md:hover:text-xl'><HiMiniCloudArrowUp /></button>}
                <button onClick={() => handleDeleteBooking(booking.id)} className='text-red-500 hover:text-red-700 duration-300 transition-all text-xs hover:text-sm sm:text-sm hover:sm:text-[15px] md:text-[17px] md:hover:text-xl'><HiOutlineTrash /></button>
            </div>
        </div>
    )
}

export default BookingList
