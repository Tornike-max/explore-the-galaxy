import { useQuery } from "@tanstack/react-query";
import { getAllObservatories } from "../../services/observatoryApi";

export function useObservatory() {
  const { data, isLoading } = useQuery({
    queryFn: getAllObservatories,
    queryKey: ["observatories"],
  });

  return { data, isLoading };
}
