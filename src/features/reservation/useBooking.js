import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/bookingApi";

export function useBooking(id) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getBooking(id),
    queryKey: ["bookings", id],
  });
  if (error) throw new Error(error.message);
  return { data, isLoading };
}
