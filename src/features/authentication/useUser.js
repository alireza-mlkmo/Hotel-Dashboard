import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser(){
    const {data:user , isPending: isLoadingUser } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser
    });

    return{user , isAuthenticated:user?.role=== "authenticated" , isLoadingUser}
}