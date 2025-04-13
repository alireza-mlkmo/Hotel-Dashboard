import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {mutate: login, isPending: isLoadingLogin} = useMutation({
        mutationFn:({email , password}) => loginApi({email,password}),

        onSuccess:(user) => {
            navigate("/dashboard")
            queryClient.setQueryData(['user'],user.user)
            toast.success("Login was successfuly")
        },

        onError:(error) =>{
            console.error(error);
            toast.error('Provided email or password are incorrect')
        } 
    })

    return {login , isLoadingLogin}
}