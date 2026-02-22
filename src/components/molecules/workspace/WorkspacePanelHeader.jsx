import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { useWorkspacePreferenceModal } from "@/hooks/context/useWorkspacePreferenceModal";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, ListFilterIcon, SquarePenIcon } from "lucide-react";
import { useEffect } from "react";

export const WorkspacePanelHeader = ({ workspace }) => {
    console.log('workspace in workspacePanel header is', workspace.members);
    const workspacemembers = workspace?.members;
    const { openPreference, setOpenPreference, initialValue, setInitialValue } = useWorkspacePreferenceModal();
    const { setWorkspace } = useWorkspacePreferenceModal();
    const { auth } = useAuth();
    console.log(auth.user._id);
    useEffect(() => {
        setWorkspace(workspace);
    },[])
    const isLoggedInUserAdminOfWorkspace = workspacemembers?.find(
        (member) => member.memberId._id === auth?.user?._id && member.role === 'admin'
    );
    console.log("isLoggedInUserAdminOfWorkspace", isLoggedInUserAdminOfWorkspace);
    return (
        <div className="flex items-center justify-between">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant='transparent' className='font-semibold text-lg w-auto p-1.5 overflow-hidden'>
                        <span className="truncate">{workspace?.name}</span>
                        <ChevronDownIcon className="size-5 ml-1"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side='bottom' align='start' className='w-64'>
                    <DropdownMenuItem>
                        <div className=" size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2 bg-[#616061]">
                            {workspace?.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-bold">
                                {workspace?.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Active workspace
                            </p>
                        </div>
                    </DropdownMenuItem>

                    {isLoggedInUserAdminOfWorkspace && (
                        <>
                            <DropdownMenuItem onClick={() =>{
                               setInitialValue(workspace?.name)
                                setOpenPreference(true)}} className="cursor-pointer py-2">
                                Preferences
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer py-2">
                                Invite people to {workspace?.name}
                            </DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div>
                <Button variant='transparent' size='iconsm'>
                    <ListFilterIcon className="size-5"/>
                </Button>
                <Button variant='transparent' size='iconsm'>
                    <SquarePenIcon className="size-5"/>
                </Button>
            </div>
        </div>
    )
}