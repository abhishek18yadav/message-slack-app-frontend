import { Dialog, DialogClose, DialogContent ,DialogFooter,DialogHeader,DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import { useDeleteWorkspace } from "@/hooks/api/workspaces/useDeleteWorkspace";
import { useWorkspacePreferenceModal } from "@/hooks/context/useWorkspacePreferenceModal"
import { TrashIcon } from "lucide-react"
import { useEffect } from "react";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUpdateWorkspace } from "@/hooks/api/workspaces/useUpdateWorkspace";
import { useConfirm } from "@/hooks/useConfirm";

export const WorkspacePreferenceModal = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { openPreference, setOpenPreference, initialValue, workspace } = useWorkspacePreferenceModal();
    const { confirmation, ConfirmDialog } = useConfirm({ title: 'Do you want to delete the workspace ?', message: 'the action cant be undone' })
    
    const { confirmation: updateConfirmation, ConfirmDialog: UpdateDialog } = useConfirm({ title: "Do you want to update the workspace", message: 'This action cant be undone' });
    const [renameValue, setRenameValue] = useState(false);
    const [workspaceId, setWorkspaceId] = useState(null);
    const { isPending, updateWorkspaceMutation } = useUpdateWorkspace(workspaceId);
    const [editOpen, setEditOpen] = useState(false);
    const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);
    

    useEffect(() => {
        console.log("workspace from workspacePreferenceModal is ", workspace);
        setWorkspaceId(workspace?._id);
        setRenameValue(workspace?.name);
    }, [workspace]);

     function handleClose() {
        setOpenPreference(false);
    }
    async function handkeDelete() {
        try {
            const ok = await confirmation();
            console.log('confirmation reciieved',ok);
            if (!ok) {
                return;
            }
            else {
                console.log("in else field");
            await deleteWorkspaceMutation();
            navigate('/home');
            queryClient.invalidateQueries('fetchWorkspace');
            setOpenPreference(false);
                toast.success("workspace deleted successfully");
            }
        } catch (error) {
            console.log("error in deleting workspace", error);
            toast.error("error in deleting workspace");
        }
    }
    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            const ok = await updateConfirmation();
            console.log("update confirmation recieevd");
            if (!ok) {
                return;
            }
            await updateWorkspaceMutation(renameValue);
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`);
            setOpenPreference(false);
            toast.success("workspace updated successfully");
        } catch (error) {
            console.log('error in updating workspace', error);
            toast.error("error in updating workspace");
        }
    }
    return (
        <>
            <ConfirmDialog />
            <UpdateDialog/>
         <Dialog open={openPreference} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader >
                    <DialogTitle >
                        {initialValue}
                        </DialogTitle>
                </DialogHeader>

                <div className='px-4 pb-4 flex flex-col gap-y-2'>
                    <Dialog open={editOpen} onOpenChange={setEditOpen}>
                        <DialogTrigger>
                            <div
                        className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                    >   
                        <div  className='flex items-center justify-between'>
                            <p 
                                className='font-semibold text-sm'
                            >
                               {initialValue}
                            </p>
                            <p
                                className='text-sm font-semibold hover:underline'
                            >
                                Edit
                            </p>
                        </div>
                    </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Rename Workspace</DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4" onSubmit={handleFormSubmit}>
                                <Input
                                    value={renameValue}
                                    onChange={(e) => setRenameValue(e.target.value)}
                                    required
                                    autoFocus
                                    minLength={3}
                                    maxLength={50}
                                    disabled={isPending}
                                    placeholder='workspace Name e.g. Design Team '
                                />
                                <DialogFooter>
                                    <DialogClose>
                                        <Button variant="outline" disabled={isPending}>
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button type='submit' disabled={isPending}>
                                        Save
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>

                    <button
                        onClick={handkeDelete}
                        className='flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                    >
                        <TrashIcon className='size-5' />
                        <p>
                            Delete Workspace
                        </p>
                    </button>
                </div>
            </DialogContent>
            </Dialog>
        </>    
    )
}