import { useQuery } from "@tanstack/react-query";
import { getPaginatedMessages } from "../../../apis/channels/index";
import { useAuth } from "@/hooks/context/useAuth";


export const useGetChannelMessages = (channelId) => {
    const { auth } = useAuth();
    const { isFetched, isError, error, data, isSuccess } = useQuery({
      queryFn: () =>
        getPaginatedMessages({
          channelId,
          limit: 10,
          offset: 0,
          token: auth?.token,
        }),
      queryKey: ['getPaginatedMessages', channelId],
      enabled: !!auth?.token && !!channelId
    });
    return {
      isFetched,
      isError,
      error,
      messages:data,
      isSuccess
    }
}