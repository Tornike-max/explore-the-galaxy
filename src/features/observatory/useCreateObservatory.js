import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewObservatory } from "../../services/observatoryApi";
import toast from "react-hot-toast";

export function useCreateObservatory() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createNewObservatory,
    onSuccess: () => {
      toast.success("Observatory created successfully");
      queryClient.invalidateQueries({ queryKey: ["observatories"] });
    },
    onError: () => {
      toast.error("Error creating observatory");
    },
  });

  return { mutate, isLoading };
}
