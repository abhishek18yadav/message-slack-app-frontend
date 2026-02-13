import { updateWorkspaceRequest } from "@/apis/workspaces"
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query"


export const useUpdateWorkspace = (workspaceId) => {
    const { auth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: updateWorkspaceMutation } = useMutation({
        mutationFn: (name) => updateWorkspaceRequest({ workspaceId, name, token: auth?.token }),
        onSuccess: () => {
            console.log("workspace updated successfully");
        },
        onError: () => {
            console.log("error occured in updation of workspace", error);
        }
    });
    return {
        isSuccess,
        isPending,
        error,
        updateWorkspaceMutation
    }
}