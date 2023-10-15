import { useQuery } from "@tanstack/react-query";
import { getSingleService } from "../../services/serviceApi";

export function useSingleService(id) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getSingleService(id),
    queryKey: ["services", id],
  });

  if (error) throw new Error(error.message);
  return { data, isLoading };
}
