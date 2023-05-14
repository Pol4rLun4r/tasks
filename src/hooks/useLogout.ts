import { api } from "../services/api";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth, setPersist } = useAuth();

    const logout = async () => {
        setAuth({});
        setPersist(false);

        try {
            await api.get('/logout', {
                withCredentials: true
            })

        } catch (error) {
            console.log(error);
        }
    }

    return logout;
}

export default useLogout;