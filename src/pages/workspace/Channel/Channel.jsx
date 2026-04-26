import { ChannelHeader } from "@/components/molecules/Channel/ChannelHeader";
import { ChatInput } from "@/components/molecules/ChatInput/ChatImput";
import { useGetChannelById } from "@/hooks/api/channels/useGetChannelById";
import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { useParams } from "react-router-dom"
import { useSocket } from "@/hooks/context/useSocket";
import { useEffect } from "react";
import { Message } from "@/components/molecules/Message/Message";
import { useQueryClient } from "@tanstack/react-query";
import { useGetChannelMessages } from "../../../hooks/api/channels/useGetChannelMessages";
import { useChannelMessages } from "@/hooks/context/useChannelMessages";

export const Channel = () => {
    const { channelId } = useParams();
    const { channelDetails, isFetching, isError } = useGetChannelById(channelId);
    const { joinChannel } = useSocket();
    const { messages, isSuccess } = useGetChannelMessages(channelId);
    const { setMessageList, messageList } = useChannelMessages();
    const queryClient = useQueryClient();
    // Clear messages immediately when channel changes
    useEffect(() => {
        setMessageList([]);
        queryClient.invalidateQueries({ queryKey: ['getPaginatedMessages', channelId] });
    }, [channelId]);

    useEffect(() => {
        if (!isFetching && !isError) joinChannel(channelId);
    }, [isFetching, isError, joinChannel, channelId]);

    useEffect(() => {
        if (messages) {
            setMessageList(messages);
        }
    }, [messages, setMessageList]);
    
    if (isFetching) {
        return (
            <div className="h-full flex-1 flex items-center justify-center">
                <Loader2Icon className="size-5 animate-spin text-muted-foreground"/>

            </div>
        )
    }
    if (isError) {
        return (
            <div className="h-full flex-1 flex flex-col gao-y-2 items-center justify-center">
                <TriangleAlertIcon className="size-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Channel Not Found</span>
            </div>
        )
    }
    return (
        <div className="flex flex-col h-full">
            <ChannelHeader name={channelDetails?.name} />
            {messageList?.map((message) => {
                return <Message key={message._id} body={message.body} authorImage={message.senderId?.avatar} authorName={message.senderId?.username} createdAt={message.createdAt}   />;
            })}
            <div className="flex-1 flex items-end">
                <ChatInput/>
            </div>
        </div>
    )
}