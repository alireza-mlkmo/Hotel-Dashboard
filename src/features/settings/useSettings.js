import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings(){
    const {data: settings ,  isPending: isLoadingSettings , error} = useQuery({
        queryKey:["settings"],
        queryFn:getSettings,
    });

    return { settings, isLoadingSettings, error };
}