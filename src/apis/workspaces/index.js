import axiosConfig from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token })=>{
    try {
        const response = await axiosConfig.post('/workspaces', { name, description }, { Headers: { 'x-access-token': token } });
        console.log('response in create workspace request', response);
        return response?.data;
    } catch (error) {
        console.log("error in workspace api ", error);
        throw error.response.data;
    }
}

export const fetchWorkspaceRequest = async ({ token }) => {
    try {
        const response = await axiosConfig.get('/workspaces', { headers: { 'x-access-token': token } });
        console.log('response in fetch workspace request', response);
        return response?.data;
    } catch (error) {
        console.log('error in fetchingworkspace request', error);
        throw error.response.data;
    }
};