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
export const getChannelById = async ({ channelId, token }) => {
  try {
    const response = await axiosConfig.get(`/channels/${channelId}`, {
      headers: {
        'x-access-token': token
      }
    });
    return response?.data?.data;
  } catch (error) {
    console.log("error in getChannelById request", error);
    throw error;
  }
}
export const getPaginatedMessages = async ({ channelId, page, limit, token }) => {
  try {
    const response = await axiosConfig.get(`/messages/${channelId}`, {
      params: {
        limit: limit || 20,
        offset: offset || 0
      },
      headers: {
        'x-access-token': token
      }
    });
    return response?.data?.data;
  } catch (error) {
    console.log("error in getPaginatedMessages request", error);
    throw error;
  }
}