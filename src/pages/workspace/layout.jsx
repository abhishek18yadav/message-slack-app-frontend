import { WorkspaceNavbar } from "@/components/organisms/Workspace/WorkspaceNavbar"
import { WorkspacePanel } from "@/components/organisms/Workspace/WorkspacePanel";
import { WorkspaceSidebar } from "@/components/organisms/Workspace/WorkspaceSidebar"
import { useState } from "react";
export const WorkspaceLayout = ({ children }) => {
    const [sidebarWidth, setSidebarWidth] = useState(250); // initial width in px

  const handleDrag = (e) => {
    setSidebarWidth(e.clientX); // update width based on mouse position
  };

    return (
        <div className="fixed h-screen w-screen">
            <WorkspaceNavbar/>
            <div className="flex h-[calc(100vh - 50px)]">
                <WorkspaceSidebar /> 
                <div className="flex h-screen w-full">
                    {/* Sidebar */}
                    <div
                        className="bg-slack-medium text-white"
                        style={{ width: sidebarWidth, minWidth: 150 }}
                    >
                        <WorkspacePanel/>
                    </div>

                    {/* Divider / Handle */}
                    <div
                        className="w-1 cursor-col-resize bg-slack-medium hover:bg-slate-400"
                        onMouseDown={(e) => {
                        document.addEventListener("mousemove", handleDrag);
                        document.addEventListener("mouseup", () => {
                            document.removeEventListener("mousemove", handleDrag);
                        }, { once: true });
                        }}
                    />

                    {/* Main Content */}
                    <div className="flex-1 bg-white">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
}
