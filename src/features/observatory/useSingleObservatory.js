import { useQuery } from "@tanstack/react-query";
import { getSingleObservatory } from "../../services/observatoryApi";

export function useSingleObservatory(id) {
  const { data: observatory, isLoading } = useQuery({
    queryFn: () => getSingleObservatory(id),
    queryKey: ["observatories"],
  });
  return { observatory, isLoading };
}
