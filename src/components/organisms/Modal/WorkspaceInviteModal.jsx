import { Dialog, DialogContent, DialogHeader,DialogTitle,DialogDescription } from "@/components/ui/dialog";
import { useResetJoinCode } from "@/hooks/api/workspaces/useRestJoinCode";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { RefreshCcwIcon } from "lucide-react";

export const WorkspaceInviteModal = ({ openInviteModal, setOpenInviteModal, workspaceName, joinCode,workspaceId }) => {
    const { resetJoinCodeMutation } = useResetJoinCode(workspaceId);

    async function handleCopy() {
        const inviteLink = `${joinCode}`;
        await navigator.clipboard.writeText(inviteLink);
        toast.success("link copied to clipBoard");
    }
    async function handleResetCode() {
        try {
            await resetJoinCodeMutation();
            toast.success("joinCode reset Successfully");
        } catch (error) {
            console.log('error in resetting joinCode', error);
        }
    }
    return (
        <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Invite people to {workspaceName}
                    </DialogTitle>
                    <DialogDescription>
                        Use the code shown below to invite people to your workspace.
                    </DialogDescription>
                </DialogHeader>

                <div
                    className='flex flex-col items-center justify-center py-10 gap-y-4'
                >
                    <p className='font-bold text-4xl uppercase'>
                        {joinCode}
                    </p>
                    <Button size="sm" variant="ghost" onClick={handleCopy}>
                        Copy code
                        <CopyIcon className='size-4 ml-2' />
                    </Button>
                    <a href={`/workspace/join/${workspaceId}`}
                        target='_blank'
                        rel="noreferrer"
                        className="text-blue-500"
                    >
                        Redirect to join page
                    </a>
                </div>
                <div
                    className='flex items-center justify-center w-full'
                >
                    <Button variant="outline" onClick={handleResetCode}>
                        Reset Join Code
                        <RefreshCcwIcon className='size-4 ml-2' />
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    );
}