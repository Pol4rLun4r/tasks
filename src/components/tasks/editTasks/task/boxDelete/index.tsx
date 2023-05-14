// style
import Background from "./style/Background";
import { Cancel, Delete } from "./style/Buttons";

// fetch
import { UseMutateFunction, useMutation } from "react-query";

// hooks
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useTask from "../../../../../hooks/tasks/useTask";

// service
import queryClient from "../../../../../services/queryClient";
import { ErrorMsg, LoadingMsg } from "./style/Messages";

interface IBox {
    taskId: string
}

interface IError {
    error: any
    isSuccess: boolean
    isError: boolean
    mutate: UseMutateFunction<any, unknown, IBox, unknown>
    isLoading: boolean
    data?: any | null
}

const BoxDelete = ({ taskId }: IBox) => {
    const { setDeleteById, setTask, task } = useTask();

    const api = useAxiosPrivate();
    const { mutate, isError, error, isLoading }: IError = useMutation(async (data: IBox) => {
        const response = await api.post('/taskdelete', data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
        return response.data
    }, {
        onSuccess: async () => {
            await queryClient.refetchQueries({ queryKey: ['tasks'], active: true })
            setDeleteById('');
            if (task.taskId === taskId){
                setTask({});
            }
        }
    })

    const handleDelete = () => {
        const task = { taskId }
        mutate(task);
    }

    const handleCancel = () => {
        setDeleteById('');
    }

    return (
        <Background>
            {isLoading && <LoadingMsg>loading...</LoadingMsg>}
            {isError && error.response && <ErrorMsg>{error?.response?.data?.message}</ErrorMsg>}
            {isError && !error?.response?.data?.message && <ErrorMsg>{error.message}</ErrorMsg>}
            {!isLoading && !isError &&
                <>
                    <Delete handle={handleDelete}>confirm to delete</Delete>
                    <Cancel handle={handleCancel}>cancel</Cancel>
                </>
            }
        </Background>
    )
}

export default BoxDelete;