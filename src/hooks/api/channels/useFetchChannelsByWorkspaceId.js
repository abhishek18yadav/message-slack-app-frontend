import { fetchAllChannelsFormWorkspaceId } from "@/apis/channels"
import { useAuth } from "@/hooks/context/useAuth"
import { useQuery } from "@tanstack/react-query"

export const useFetchAllChannelsFormWorkspaceId = (workspaceId) => {
    const { auth } = useAuth();
    const { isFetching, isSuccess, error, data: channels } = useQuery({
        queryFn: () => fetchAllChannelsFormWorkspaceId({ workspaceId: workspaceId,token:auth?.token }),
        queryKey: ['fetchAllChannels',workspaceId],
        staleTime: 30000,
        enabled: !!auth?.token && !!workspaceId
    });
     console.log("useFetchAllChannelsFormWorkspaceId ->cahnnels", channels);
    return {
      isFetching,
      isSuccess,
      error,
      channels,
    };
}