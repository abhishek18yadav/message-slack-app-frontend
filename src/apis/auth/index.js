
export const signupRequest = async ({ email, password, username }) => {
    try {
        const response = await axios.post('/users/signup', {
            email,password,username
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}
export const signInRequest = async ({ email, password }) => {
    try {
        const response = await axios('/users/signin', {
            email, password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
}