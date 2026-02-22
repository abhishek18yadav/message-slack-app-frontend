import { createContext, useState } from "react"

const WorkspacePreferenceModalContext = createContext();
export const WorkspacePreferenceModalContextProvider = ({ children }) => {
    
const [workspace, setWorkspace] = useState();
    const [openPreference, setOpenPreference] = useState(false);
    const [initialValue, setInitialValue] = useState('Edit Workspace');
    return (
        <WorkspacePreferenceModalContext.Provider value={{ openPreference, setOpenPreference, initialValue, setInitialValue ,workspace,setWorkspace}}>
            {children}
        </WorkspacePreferenceModalContext.Provider>
    )
}
export default WorkspacePreferenceModalContext;