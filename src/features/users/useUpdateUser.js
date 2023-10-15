import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/userApi";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, first_name, last_name }) =>
      updateUser({ email, first_name, last_name }),
    onSuccess: () => {
      toast.success("Successfully updated user");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("Error updating user");
    },
  });
  return { mutate, isLoading };
}
