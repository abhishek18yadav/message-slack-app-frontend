import { addMemberToWorkspaceRequest } from "@/apis/workspaces"
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query"


export const useAddMemberToWorkspace = (workspaceId) => {
    const { auth } = useAuth();

    const { mutateAsync:addMemberToWorkspaceMutation , isSuccess,isPending,error} = useMutation({
        mutationFn: () => addMemberToWorkspaceRequest({ workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log('Member added to workspace successfully');
        },
        onError: (error) => {
            console.log("error in adding member to workspace", error);
        }
    });
    return {
        addMemberToWorkspaceMutation,
        isSuccess,
        isPending,
        error
    }
}