import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookingCheckin } from "../../services/bookingApi";
import toast from "react-hot-toast";

export function useCheckin() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (id) => updateBookingCheckin(id),
    onSuccess: () => {
      toast.success("User successfully checked in");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("User failed to check in");
    },
  });
  return { mutate, isLoading };
}
