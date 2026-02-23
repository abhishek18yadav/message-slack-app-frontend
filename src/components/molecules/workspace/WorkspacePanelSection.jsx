import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { useState } from "react";


export const WorkspacePanelSection = ({children , label , onIconClick}) => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex flex-col mt-3 px-2">
            <div className="flex items-center px-3.5 group">
                <Button
                    onClick={() => { setOpen(!open) }}
                    variant='transparent'
                    className='p-0.5 text-sm size-6 text-[#f9edffcc'
                >
                    {open ? <FaCaretDown className="size-4"/> : <FaCaretRight className="size-4"/>}
                </Button>
                <Button
                    variant='primary'
                    size='sm'
                    onClick={onIconClick}
                    className='text-[#f9edffcc] transition opacity ml-auto p-0.5 text-sm w-6 h-6 hover:bg-slack-dark hover:w-20'
                >
                    <span>{label}</span>
                </Button>
                {onIconClick && (
                    <Button
                        variant='primary'
                        size='sm'
                        onClick={onIconClick}
                        className='text-[#f9edffcc] transition opacity ml-auto p-0.5 text-sm size-6 hover:bg-slack-dark'
                    >
                        <PlusIcon className="size-4 text-[#f9edffcc" />
                    </Button>
                )}
            </div>
            {open && children}
        </div>
    )
}