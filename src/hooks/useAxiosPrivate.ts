import { apiPrivate } from "../services/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefresh";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth }: any = useAuth();

    useEffect(() => {

        const requestIntercept = apiPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = apiPrivate.interceptors.response.use(
            response => response,
            async (error: any) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAcessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAcessToken}`;
                    return apiPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            apiPrivate.interceptors.request.eject(requestIntercept);
            apiPrivate.interceptors.response.eject(responseIntercept);
        }

    }, [auth, refresh]);


    return apiPrivate;
};

export default useAxiosPrivate;