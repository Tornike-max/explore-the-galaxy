import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/userApi";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
  });

  return {
    user,
    isLoading,
    isAuthenticated: user?.user?.role === "authenticated",
    userName: user?.user?.user_metadata?.first_name,
    lastName: user?.user?.user_metadata?.last_name,
    email: user?.user?.new_email ? user?.user?.new_email : user?.user?.email,
  };
}
