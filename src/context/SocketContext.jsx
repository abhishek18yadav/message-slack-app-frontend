import { createContext } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
import { useChannelMessages } from "@/hooks/context/useChannelMessages";
const SocketContext = createContext();
export const SocketContextProvider = ({ children }) => {
    const [currentChannel, setCurrentChannel] = useState(null);
    const {messageList, setMessageList} = useChannelMessages();
    const socket = io(import.meta.env.VITE_BACKEND_SOCKET_URL);
     socket.on('NewMessageReceived', (data) => {
        console.log('New message received', data);
        setMessageList([...messageList, data]);
    });
    async function joinChannel(channelId) {
        socket.emit('JoinChannel', { channelId }, (data) =>{
            console.log('Successfully joined the channel', data);
            setCurrentChannel(data?.data);
        });
    }
    return (
        <SocketContext.Provider value={{socket , joinChannel , currentChannel  }}>
            {children}
        </SocketContext.Provider>
    )
}
export default SocketContext;
/**
 * 
 * // Server
io.on("connection", (socket) => {
  socket.on("chatMessage", (msg) => {
    console.log("Got message:", msg);
    // Send back only to sender
    socket.emit("chatMessage", msg);

    // Send to everyone including sender
    io.emit("chatMessage", msg);

    // Send to everyone except sender
    socket.broadcast.emit("chatMessage", msg);
  });
});
 */