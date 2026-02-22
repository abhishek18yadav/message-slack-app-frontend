import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth"
import { LogOutIcon, SettingsIcon ,PencilIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
export const UserButton = () => {
    const { auth, logout } = useAuth();
    const navigate = useNavigate();
    async function handleLogout() {
        await logout();
        toast.success("successfully signed out");
        navigate('/auth/signin');
    }
    const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();
    function openWorkspaceCreateModal() {
        console.log("setOpenCreateWorkspaceModal is made true");
        setOpenCreateWorkspaceModal(true);
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className="size-10 hover:opacity-65 transition">
                    <AvatarImage src={auth?.user?.avatar} />
                    <AvatarFallback>{auth?.user?.username[0].toUpperCase() }</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={openWorkspaceCreateModal}>
                    <PencilIcon />
                    Create Workspace
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className="size-4 mr-2 h-10" />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOutIcon  className="size-4 mr-2 d-10"/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
