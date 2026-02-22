import { Loader } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useGetWorkspaceById } from '@/hooks/api/workspaces/useGetWorkspaceById';
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu';
import { useFetchWorkspace } from '@/hooks/api/workspaces/useFetchWorkspace';
export const WorkspaceSwitcher = () => {

    const navigate = useNavigate();

    const { workspaceId } = useParams();

    const { isFetching, workspace } = useGetWorkspaceById(workspaceId);

    const { workspaces, isFetching: isFetchingWorkspace } = useFetchWorkspace();

    // console.log("first letter of workspaces is",workspace?.name.charAt(0).toUpperCase());
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
  <Button
    className="w-9 h-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 font-semibold text-white text-xl"
  >
    {isFetching ? (
      <Loader className="w-5 h-5 animate-spin text-white" />
    ) : (
      workspace?.name.charAt(0).toUpperCase()
    ) 
    }
  </Button>
</DropdownMenuTrigger>
            <DropdownMenuContent className=' bg-slate-500'>
                <DropdownMenuItem className="cursor-pointer flex-col justify-start items-start">
                    {workspace?.name}
                    <span className='text-xs text-muted-foreground'>
                        (Active Workspace)
                    </span>
                </DropdownMenuItem>
                {isFetchingWorkspace ? (<Loader className='size-5 animate-spin' />) : workspaces?.map((workspace) => {
                    if (workspace._id === workspaceId) {
                        return null;
                    }
                    return (
                        <DropdownMenuItem onClick={() => {navigate(`/workspace/${workspace._id}`)}} key={workspace._id} className="cursor-pointer flex-col justify-start items-start" >
                            <p>
                                {workspace?.name}
                            </p>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};