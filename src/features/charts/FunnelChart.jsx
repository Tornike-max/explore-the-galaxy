import { useBookings } from "../reservation/useBookings"
import Spinner from "../../ui/Spinner"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function FunnelChartComponent() {
    const { data, isLoading } = useBookings()


    if (isLoading) return <Spinner />
    console.log(data)

    const bookingData = data.map(booking => {
        return {
            "name": booking?.guests?.first_name,
            "TotalPrice": booking?.service?.price,
            "Discount": booking?.service?.discount,
        }
    })

    console.log(bookingData)

    return (

        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="TotalPrice" fill="#8884d8" />
                <Bar dataKey="Discount" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>

    )
}

export default FunnelChartComponent
