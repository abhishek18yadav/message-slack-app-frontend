import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/api/workspaces/useFetchWorkspace";
import { useEffect } from "react";

export function Home() {
    const { isFetching, workspaces } = useFetchWorkspace();
    useEffect(() => {
        if (isFetching) return;
        console.log('workspaces downloaded is ', workspaces);
        if (workspaces.length === 0 || !workspaces) {
            console.log('no workspace found');
        }
    },[isFetching , workspaces])
    return (
        <>
            <h1>home</h1>
            <UserButton/>
        </>
    )
}