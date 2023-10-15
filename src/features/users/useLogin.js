import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      toast.success("Successfully login");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
    onError: () => {
      toast.error("Error while logging in");
    },
  });

  return { mutate, isLoading };
}
