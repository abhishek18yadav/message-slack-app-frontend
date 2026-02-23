import { addChannelToWorkspace } from "@/apis/channels";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useCreateChannels = () => {
    const { auth } = useAuth();
    const queryClient = useQueryClient();

    const { mutateAsync: createChannelMutation, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: (data) => addChannelToWorkspace({ ...data, token: auth?.token }),
        onSuccess: (data, variables) => {
            console.log("channel Created successfully", data);
            // Invalidate channels query to refetch the list
            queryClient.invalidateQueries({
                queryKey: ['fetchAllChannels', variables.workspaceId],
            });
        },
        onError: (error) => {
            console.log("error in useCreateChannels", error);
        }
    });
    return {
        createChannelMutation,
        isPending,
        isSuccess,
        isError,
        error
    }
}