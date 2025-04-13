import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfuly created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    //   reset();
    //   setShowForm(false);
    },
    onError: (err) => toast.err(err.message),
  });

  return {createCabin , isCreating}
}