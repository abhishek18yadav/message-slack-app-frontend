import { createContext, useState } from "react"


const WorkspacePreferenceModalContext = createContext();
export const WorkspacePreferenceModalContextProvider = ({children}) => {
    const [openPreference, setOpenPreference] = useState(false);
    const [initialValue, setInitialValue] = useState('Edit Workspace');
    return (
        <WorkspacePreferenceModalContext.Provider value={{ openPreference, setOpenPreference, initialValue, setInitialValue }}>
            {children}
        </WorkspacePreferenceModalContext.Provider>
    )
}
export default WorkspacePreferenceModalContext;