import axiosConfig from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token })=>{
    try {
        console.log("going to create workspace", name, description, token);
        const response = await axiosConfig.post('/workspace', { name, description }, { headers: { 'x-access-token': token } });
        console.log('response in create workspace request', response);
        return response?.data?.data;
    } catch (error) {
        console.log("error in workspace api ", error);
        throw error.response.data;
    }
}

export const fetchWorkspaceRequest = async ({ token }) => {
    try {
        const response = await axiosConfig.get('/workspace', { headers: { 'x-access-token': token } });
        console.log('response in fetch workspace request', response);
        return response?.data?.data;
    } catch (error) {
        console.log('error in fetchingworkspace request', error);
        throw error.response.data;
    }
};
export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
    try {
        console.log("workspaceId is " , workspaceId)
        const response = await axiosConfig.get(`/workspace/${workspaceId}`, {
            headers: {
                'x-access-token':token
            }
        })
        return response.data?.data;
    } catch (error) {
        console.log("error in fetchinf workspace sby workspaceId", error);
        throw error.response.data;
    }
}
export const deleteWorkspaceRequest = async ({workspaceId , token}) => {
    try{
        const response = await axiosConfig.delete(`/workspace/${workspaceId}`,{ headers:{
            'x-access-token':token
        }
        })
        return response?.data?.data;
    }
    catch (error) {
        console.log("error is", error);
        throw error.response.data;
    }
}
export const updateWorkspaceRequest = async({workspaceId,name,token}) => {
    try {
        const response = await axiosConfig.put(`/workspace/${workspaceId}`, { name }, {
            headers: {
                'x-access-token': token
            }
        });
    } catch (error) {
        console.log("error in updating workspace request", error);
        throw error.response.data;
    }
}