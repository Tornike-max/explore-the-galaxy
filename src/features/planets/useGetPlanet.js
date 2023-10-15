import { useQuery } from "@tanstack/react-query";
import { getPlanet } from "../../services/planetsApi";

export function useGetPlanet(id) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getPlanet(id),
    queryKey: ["planets", id],
  });

  if (error) throw Error;
  return { data, isLoading };
}
