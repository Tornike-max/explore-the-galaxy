import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "../../services/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, first_name, last_name }) =>
      signUp({ email, password, first_name, last_name }),

    onSuccess: () => {
      toast.success("User successfully created");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate(-1);
    },
    onError: () => {
      toast.error("User failed to create");
    },
  });
  return { signup, isLoading };
}
