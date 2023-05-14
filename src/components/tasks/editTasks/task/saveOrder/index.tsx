// style
import Container from "./style/Container";
import { SaveOrderButton } from "./style/Buttons";
import { LoadingMsg, ErrorMsg } from "./style/Messages";

// fetch
import { UseMutateFunction, useMutation } from "react-query";

// hooks
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";

// service
import queryClient from "../../../../../services/queryClient";

interface ISaveOrder {
    order: any[];
    handleRefresh?: any;
}

interface IOrder {
    order: any[];
}

interface IError {
    error: any
    isSuccess: boolean
    isError: boolean
    mutate: UseMutateFunction<any, unknown, IOrder, unknown>
    isLoading: boolean
    data?: any | null
}

const SaveOrder = ({ order, handleRefresh }: ISaveOrder) => {

    const api = useAxiosPrivate();
    const { mutate, isError, error, isLoading }: IError = useMutation(async (data: IOrder) => {
        const response = await api.put('/tasks', data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
        return response.data
    }, {
        onSuccess: async () => {
            localStorage.setItem('originalData', JSON.stringify(order))
            await queryClient.refetchQueries({ queryKey: ['tasks'], active: true })
            handleRefresh();
        }
    })

    const handleSaveOrder = () => {
        const tasks = { order }
        mutate(tasks);
    }

    return (
        <Container>
            <SaveOrderButton handle={handleSaveOrder}>save new order</SaveOrderButton>
            {isLoading && <LoadingMsg>loading...</LoadingMsg>}
            {isError && error.response && <ErrorMsg>{error?.response?.data?.message}</ErrorMsg>}
            {isError && !error?.response?.data?.message && <ErrorMsg>{error.message}</ErrorMsg>}
        </Container>
    )
}

export default SaveOrder;