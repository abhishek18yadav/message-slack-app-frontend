import { createWorkspaceRequest } from "@/apis/workspaces";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/context/useAuth";
export const useCreateWorkspace = () => {
    const { auth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: createWorkspaceMutation } = useMutation({
        mutationFn: (data) => {
            console.log(data , auth?.token);
            return createWorkspaceRequest({ ...data, token: auth?.token })
        },
        onSuccess: (data) => { console.log('Successfully cretaed workspace', data) },
        onError: (error) => {
            console.log('failed to create workspace', error);
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        CreateWorkspaceMutation: createWorkspaceMutation
    }
};