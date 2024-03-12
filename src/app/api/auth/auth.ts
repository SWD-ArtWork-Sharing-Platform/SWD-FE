import axiosInstances from "@/utils/axios";

const requestAuth = axiosInstances.auth

const loginWithUsernameAndPassword = (username:string, password:string) => requestAuth.post(`/auth/login`, { username: username, password: password })

const authApi = {
    loginWithUsernameAndPassword
};
  
export default authApi;