import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteObservatory } from "../../services/observatoryApi";
import toast from "react-hot-toast";

export function useDeleteObservatory() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (id) => deleteObservatory(id),
    onSuccess: () => {
      toast.success("Observatory successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["observatories"] });
    },
    onError: () => {
      toast.error("Error while deleting");
    },
  });
  return { mutate, isLoading };
}
