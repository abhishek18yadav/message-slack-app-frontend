import axiosConfig from "@/config/axiosConfig"

export const addChannelToWorkspace = ({ workspaceId,channelName, token  }) => {
  try {
      const response = axiosConfig.put(`workspace/${workspaceId}/channels`, {
        channelName:channelName,
    }, {
      headers: { "x-access-token": token },
    });
    return response;
  } catch (error) {
    console.log("error in api in addingWorkspace");
    throw error.response.data;
  }
};
export const fetchAllChannelsFormWorkspaceId = ({ workspaceId, token }) => {
  try {
    const response = axiosConfig.get(`/workspace/${workspaceId}/channels`, { headers: { 'x-access-token': token } });
    return response;
  } catch (error) {
    console.log("error in api calling", error);
    throw error;
  }
}