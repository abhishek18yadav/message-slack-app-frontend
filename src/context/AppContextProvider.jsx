import conbineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
export const AppContextProvider = conbineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
)