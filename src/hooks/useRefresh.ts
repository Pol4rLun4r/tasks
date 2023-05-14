import { api } from "../services/api";
import useAuth from "./useAuth";

interface IResponse {
    data: {
        accessToken: string
        user: {
            id: string
            username: string
            role: string
        }
    }
}

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response: IResponse = await api.get('/refresh', {
            withCredentials: true
        });

        const accessToken = response.data.accessToken;
        const role = response.data.user.role;
        const username = response.data.user.username;

        setAuth(prev => {
            return {
                ...prev,
                role: role,
                username: username,
                accessToken: accessToken
            };
        });

        return accessToken
    };
    return refresh
};

export default useRefreshToken