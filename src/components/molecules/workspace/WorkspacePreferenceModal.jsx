import { Dialog, DialogContent ,DialogHeader,DialogTitle} from "@/components/ui/dialog"
import { useDeleteWorkspace } from "@/hooks/api/workspaces/useDeleteWorkspace";
import { useWorkspacePreferenceModal } from "@/hooks/context/useWorkspacePreferenceModal"
import { TrashIcon } from "lucide-react"
export const WorkspacePreferenceModal = () => {
    const { openPreference, setOpenPreference, initialValue, setInitialValue } = useWorkspacePreferenceModal();
    function handleClose() {
        setOpenPreference(false);
    }
    function handleDelete() {
        console.log("deleted");
    }
    const { isPending, isSuccess, error, deleteWorkspaceMutation } = useDeleteWorkspace();
    return (
         <Dialog open={openPreference} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader >
                    <DialogTitle >
                        {initialValue}
                    </DialogTitle>
                </DialogHeader>

                <div className='px-4 pb-4 flex flex-col gap-y-2'>
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

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleDelete
                        }}
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
    )
}