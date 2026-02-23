import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Link, useParams } from "react-router-dom";

const sideBarItemsVariants = cva(
    'flex items-center,justify-center gap-1.5 front-normal h-7 px-[20px] text-sm overflow-hidden',
    {
        variants: {
            variant: {
                default: 'text-[#f9edffcc]',
                active: 'text-[#481350] bg-white/90 hover:bg-white/80'
            }
        },
        defaultVariants: 'default'
    }
);
export const SideBarItem = ({ label, id, icon: Icon, variant }) => {
    // id - channelId
    const { workspaceId } = useParams();
    return (
        <Button
            variant="transparent"
            size='sm'
            className={cn(sideBarItemsVariants(variant))}
        >
            <Link className="flex items-center gap-1.5"
                to={`/workspace/${workspaceId}/channels/${id}`}
            >
                <Icon className='size-3.5 mr=1' />
                <span className="text-sm">{ label}</span>
            </Link>
        </Button>
    )
}