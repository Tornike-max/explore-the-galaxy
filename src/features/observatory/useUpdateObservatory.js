import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editObservatory } from "../../services/observatoryApi";
import toast from "react-hot-toast";

export function useUpdateObservatory() {
  const queryClient = useQueryClient();
  const { mutate: edit, isLoading: isEditing } = useMutation({
    mutationFn: ({ editValus, id }) => editObservatory(editValus, id),
    onSuccess: () => {
      toast.success("Observatory successfully edited");
      queryClient.invalidateQueries({ queryKey: ["observatories"] });
    },
    onError: () => {
      toast.error("Error while editing");
    },
  });
  return { edit, isEditing };
}
