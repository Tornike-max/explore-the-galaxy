import Spinner from "../../ui/Spinner"
import { useBookings } from "./useBookings"
import BookingList from "./BookingList"
import Button from "../../ui/Button"
import { useSearchParams } from "react-router-dom"
import { HiOutlineEllipsisVertical } from "react-icons/hi2"

function Booking() {
    const [searchParams, setSearchParams] = useSearchParams()
    const { data, isLoading } = useBookings()
    const newValue = searchParams.get('sort') || 'all'
    const filteredValues = searchParams.get('status') || 'all'



    let sorted;

    function handleChangeParams(status) {
        searchParams.set('sort', status)
        setSearchParams(searchParams)
        console.log(status)
    }

    function handleFilterStatus(status) {
        searchParams.set('status', status)
        setSearchParams(searchParams)
        console.log(status)
    }

    if (newValue === 'all') sorted = data?.map(booking => booking)
    if (newValue === 'guests') sorted = data?.sort((a, b) => a?.numGuest - b?.numGuest)
    if (newValue === 'hours') sorted = data?.sort((a, b) => a?.numHours - b?.numHours)
    if (newValue === 'price') sorted = data?.sort((a, b) => a?.totalPrice - b?.totalPrice)
    if (newValue === 'discount') sorted = data?.sort((a, b) => a?.service?.discount - b?.service?.discount)

    console.log(sorted)

    if (filteredValues === 'all') sorted = data?.filter(bookingStatus => bookingStatus)
    if (filteredValues === 'checked-in') sorted = data?.filter(bookingStatus => bookingStatus?.status === 'checked-in')
    if (filteredValues === 'checked-out') sorted = data?.filter(bookingStatus => bookingStatus?.status === 'checked-out')
    if (filteredValues === 'unconfirmed') sorted = data?.filter(bookingStatus => bookingStatus?.status === 'unconfirmed')


    if (isLoading) return <Spinner />
    return (
        <>
            <div className='flex justify-center items-center flex-col bg-slate-200 rounded-md'>
                <h1 className='font-semibold text-xl text-purple-500 pt-2'>Filter Bookings</h1>
                <div className="bg-slate-200 rounded-md">
                    <h1 className="font-semibold text-xl text-purple-500 pt-2">Filter Bookings</h1>
                    <div className="flex  justify-between items-center max-w-screen-md w-full rounded-md bg-slate-300 px-4 mt-2 mb-2 gap-1">
                        <Button disabled={newValue === 'all'} active={newValue === 'all' ? 'bg-purple-800' : 'bg-purple-500'} onClick={() => handleChangeParams('all')}>
                            <span>All</span>
                        </Button>
                        <Button disabled={newValue === 'guests'} active={newValue === 'guests' ? 'bg-purple-800' : 'bg-purple-500'} onClick={() => handleChangeParams('guests')}>
                            Guests (Lower First)
                        </Button>
                        <Button disabled={newValue === 'hours'} active={newValue === 'hours' ? 'bg-purple-800' : 'bg-purple-500'} onClick={() => handleChangeParams('hours')}>
                            Hours <span>(Lower First)</span>
                        </Button>
                        <Button disabled={newValue === 'price'} active={newValue === 'price' ? 'bg-purple-800' : 'bg-purple-500'} onClick={() => handleChangeParams('price')}>
                            Price <span>(Lower First)</span>
                        </Button>
                        <Button disabled={newValue === 'discount'} active={newValue === 'discount' ? 'bg-purple-800' : 'bg-purple-500'} onClick={() => handleChangeParams('discount')}>
                            Discount <span>(Lower First)</span>
                        </Button>
                    </div>
                </div>

                <div className="relative inline-flex items-center mb-2">
                    <select onChange={(e) => handleFilterStatus(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 text-purple-500 py-1 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200 font-semibold">
                        <option value='all' className={`font-medium ${filteredValues === 'all' && 'font-semibold text-purple-800'}`}>All</option>
                        <option value='checked-in' className={`font-medium ${filteredValues === 'checked-in' && 'font-semibold text-purple-800'}`}>Checked-in</option>
                        <option value='checked-out' className={`font-medium ${filteredValues === 'checked-out' && 'font-semibold text-purple-800'}`}>Checked-out</option>
                        <option value='unconfirmed' className={`font-medium ${filteredValues === 'unconfirmed' && 'font-semibold text-purple-800'}`}>Unconfirmed</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <span className="text-purple-500 font-semibold"><HiOutlineEllipsisVertical /></span>
                    </div>
                </div>
            </div >
            <div className="flex flex-col justify-between gap-2 font-semibold bg-slate-200 rounded-md px-6 py-10 max-h-[600px] h-screen mx-4 mt-10">
                <div className="grid grid-cols-6 gap-6 font-bold text-purple-600 text-xs sm:text-sm md:text-md">
                    <div>Guest</div>
                    <div>Number of guests</div>
                    <div>Hours</div>
                    <div>Total Price</div>
                    <div>Discount</div>
                    <div></div>
                </div>
                {sorted?.map(booking => (
                    <BookingList booking={booking} key={booking.id} />
                ))}
            </div>

        </>

    )
}

export default Booking
