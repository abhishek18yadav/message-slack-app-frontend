import { createContext, useState } from "react"

// const CreateChannelContext = new createContext();
const CreateChannelContext =  createContext({});
export const CreateChannelContextProvider = ({children})=>{
    const [openCreateChannelModal, setOPenCreateChannelModal] = useState(false);
    const [workspaceId, setWorkspaceId] = useState(null);
    return (
        <CreateChannelContext.Provider value={{ openCreateChannelModal, setOPenCreateChannelModal ,workspaceId,setWorkspaceId}}>
            {children}
        </CreateChannelContext.Provider>
    );
}
export default CreateChannelContext;