import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/userApi";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Log out");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("User can't log out");
    },
  });
  return { mutate, isLoading };
}
