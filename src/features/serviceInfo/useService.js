import { useQuery } from "@tanstack/react-query";
import { getService } from "../../services/serviceApi";

export function useService() {
  const { data, isLoading, error } = useQuery({
    queryFn: getService,
    queryKey: ["services"],
  });
  if (error) throw Error;
  return { data, isLoading };
}
