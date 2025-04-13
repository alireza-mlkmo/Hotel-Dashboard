import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const {mutate : signup , isPending: isLoadingSignup} = useMutation({
        mutationFn: signupApi,

        onSuccess: () => {
            toast.success("Account successfuly created! Please verify the new account from user's email address  ")
        }


        
    })
    return { signup , isLoadingSignup };
}