import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookingCheckout } from "../../services/bookingApi";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading } = useMutation({
    mutationFn: (id) => updateBookingCheckout(id),
    onSuccess: () => {
      toast.success("User successfully checked out");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("User failed to check out");
    },
  });
  return { checkout, isLoading };
}
