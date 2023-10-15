import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword } from "../../services/userApi";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { mutate: update, isLoading } = useMutation({
    mutationFn: ({ password }) => updatePassword({ password }),
    onSuccess: () => {
      toast.success("Successfully update password");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("Error while updating password");
    },
  });
  return { update, isLoading };
}
