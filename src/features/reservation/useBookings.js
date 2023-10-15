import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/bookingApi";

export function useBookings() {
  const { data, isLoading, error } = useQuery({
    queryFn: getBookings,
    queryKey: ["bookings"],
  });
  if (error) throw new Error(error.message);
  return { data, isLoading };
}
