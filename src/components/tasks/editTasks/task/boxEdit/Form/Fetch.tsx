import { AxiosInstance } from "axios"
import { ITask } from "./Interface"
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate"


const useFetchNewTask = async (data: ITask) => {
    const api = useAxiosPrivate();
    const response = await api.post('/task', data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
    return response.data
}

export default useFetchNewTask;