import { CreateChannelModal } from "@/components/molecules/CreateChannelModal/CreateChannelModal"
import { CreateWorkspaceModal } from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal.jsx"
import { WorkspacePreferenceModal } from "@/components/molecules/workspace/WorkspacePreferenceModal"


export const Modals = () => {
    return (
        <>
            <CreateWorkspaceModal />
            <WorkspacePreferenceModal />
            <CreateChannelModal/>
        </>
    )
}