import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCreateChannels } from "@/hooks/api/channels/useCreateChannels";
import { useAddChannelToWorkspace } from "@/hooks/api/workspaces/useAddChannelToWorkspace";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal.js";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react"
import { toast } from "sonner";


export const CreateChannelModal = () => {
    const queryClient = useQueryClient();
    const [channelName, setChannelName] = useState('');
    const { openCreateChannelModal, setOPenCreateChannelModal, workspaceId } = useCreateChannelModal();
    // const { createChannelMutation, isPending } = useCreateChannels();
    const { currentWorkspace } = useCurrentWorkspace();
    const { addChannelToWorkspaceMutation } = useAddChannelToWorkspace();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     await createChannelMutation({ workspaceId: workspaceId, channelName: channelName });
        //     setChannelName('');
        //     setOPenCreateChannelModal(false);
        // } catch (error) {
        //     console.log("error in formSubmit in create channel modal", error);
        // }
        await addChannelToWorkspaceMutation({ workspaceId: currentWorkspace?._id, channelName: channelName });
        toast.success("channel created successfully");
        queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace?._id}`)
        handleClose();
    }
    function handleClose() {
        setOPenCreateChannelModal(false);
    }

    return (
        <Dialog open={openCreateChannelModal} onOpenChange={handleClose}>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a Channel</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit}>
                    <Input
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        minLength={3}
                        placeholder="channel Name e.g. team-announcements"
                        required
                    />
                    <div className="flex justify-end mt-4">
                        <Button>Create Channel</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}