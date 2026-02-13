import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/api/workspaces/useFetchWorkspace";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const { isFetching, workspaces } = useFetchWorkspace();
    console.log("useFetchWorkspace is ", useFetchWorkspace);
    const navigate = useNavigate();
    useEffect(() => {
        if (isFetching) return;
        console.log('workspaces downloaded is ', workspaces);
        if (!workspaces || workspaces.length === 0) {
            console.log('no workspace found');
        } else {
            navigate(`/workspace/${workspaces[0]._id}`);
        }
    },[isFetching , workspaces,navigate])
    return (
        <>
            <h1>home</h1>
            <UserButton/>
        </>
    )
}