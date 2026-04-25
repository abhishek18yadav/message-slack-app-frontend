import { MessageRenderer } from "@/components/atoms/MessageRenderer/MessageRenderer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Message = ({ authorIamge, authorName, createdAt, body }) => {
    return (
        <div>
            <div>
                <button>
                    <Avatar>
                        <AvatarImage className="rounded-md" src={authorIamge} />
                        <AvatarFallback>
                            {authorName.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </button>
                <div>
                    <div>
                        <button className="font-bold text-primary hover:underline">
                            {authorName}
                        </button>
                        <span>&nbsp;&nbsp;</span>
                        <button className="text-xs text-muted-foreground hover:underline">
                            {createdAt || 'just now'}
                        </button>
                    </div>
                    <MessageRenderer value={body} />
                </div>
            </div>
        </div>
    )
};