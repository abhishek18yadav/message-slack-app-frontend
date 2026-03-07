import { addChannelToWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth"
import { useMutation } from "@tanstack/react-query";


export const useAddChannelToWorkspace = () => {
    const { auth } = useAuth();
    const {mutateAsync:addChannelToWorkspaceMutation , isSuccess,isPending,error } = useMutation({
        mutationFn: ({ workspaceId, channelName }) => addChannelToWorkspaceRequest({ workspaceId, channelName, token: auth?.token }),
        onSuccess: (data) => { console.log('channel added to workspace', data) },
        onError: (error) => {
            console.log('error adding channel to workspace', error);
        }
        
    });
    return {
        addChannelToWorkspaceMutation,
        isPending,
        isSuccess,
        error
    }
}