import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting(){
    const queryClient = useQueryClient();
    const { mutate: updateSetting, isPending: isUpdating } = useMutation({
      mutationFn: updateSettingApi,
      onSuccess: () => {
        toast.success("Setting successfuly Edited");
        queryClient.invalidateQueries({
          queryKey: ["settings"],
        });
      },
      onError: (err) => toast.err(err.message),
    });

    return { updateSetting, isUpdating };
}