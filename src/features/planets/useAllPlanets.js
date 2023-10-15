import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../../services/planetsApi";

export function useAllPlanets() {
  const { data, isLoading, error } = useQuery({
    queryFn: getPlanets,
    queryKey: ["planets"],
  });

  if (error) throw new Error(error.message);

  return { data, isLoading };
}
