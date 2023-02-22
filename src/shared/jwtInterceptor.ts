import axios, { AxiosInstance } from "axios";
import { logout } from "../components/hooks/useLogout";
import { USER } from "../context/UserContext";

const AXIOS:AxiosInstance = axios.create({})

// Pour la requete
AXIOS.interceptors.request.use((config:any)=>{
    let token = JSON.parse(localStorage.getItem(USER) as string)?.token
    config.headers.Authorization = `Bearer ${token}`
    config.url = import.meta.env.VITE_ENDPOINT_API_BASE_URL + config.url;
    return config
})

AXIOS.interceptors.response.use(
    response => {
        return response
    },
    async (error) => {
        const config = error?.config;
        if(error?.response.status === 401)
        {
            const authData = JSON.parse(localStorage.getItem(USER) as string);
            const payload = {
                access_token: authData.token,
                refreshToken: authData.refreshToken,
            };

            let refreshTokenResponse = await axios.get(import.meta.env.VITE_ENDPOINT_API_BASE_URL + "/auth/refresh",{
                headers: {
                    "Authorization":`Bearer ${payload.refreshToken}`
                }
            })
            if(refreshTokenResponse.status === 200){
                const token = {token:refreshTokenResponse.data.access_token,refreshToken:refreshTokenResponse.data.refresh_token}
                localStorage.setItem(USER, JSON.stringify({isAuthenticated:true,...token}));
                error.config.headers[
                "Authorization"
              ] = `Bearer ${refreshTokenResponse.data.access_token}`;
            
              return axios(config);
            }else {
                logout();
            }
        } else{
            return Promise.reject(error);
        }
    }
)
export default AXIOS;