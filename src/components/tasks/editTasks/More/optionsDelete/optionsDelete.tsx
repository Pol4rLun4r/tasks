// style
import { Delete, Cancel } from "./style/Buttons";
import { Container, OptionsContainer } from "./style/Containers";
import { ErrorMsg, LoadingMsg } from "./style/Messages";

// components
import TextQuestion from "./style/TextQuestion";

// hooks
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";

// Fetch
import { UseMutateFunction, useMutation } from "react-query";

// ReactRouter
import { useNavigate } from "react-router-dom";

interface IOptionsDelete {
    handle: React.Dispatch<React.SetStateAction<boolean>>
}

interface IError {
    error: any
    isSuccess: boolean
    isError: boolean
    isLoading: boolean
    mutate: UseMutateFunction<any, unknown, void, unknown>
    data?: any | null
}

const OptionsDelete = ({ handle }: IOptionsDelete) => {
    const navigate = useNavigate();
    const api = useAxiosPrivate();

    const { mutate, isError, error, isLoading }: IError = useMutation(async () => {
        const response = await api.delete('tasks', {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        return response.data;
    }, {
        onSuccess: () => {
            handle(false);
            navigate('/');
        }
    })

    const deleteAll = () => {
        mutate();
        console.log("deleteAll");
    };

    const cancel = () => handle(false);

    return (
        <Container>
            <TextQuestion>Are you sure you want to delete all tasks? this action is irreversible</TextQuestion>
            <OptionsContainer>
                <Delete handle={deleteAll}>yes I'm sure</Delete>
                <Cancel handle={cancel}>no, cancel</Cancel>
            </OptionsContainer>
            {isLoading && <LoadingMsg>loading...</LoadingMsg>}
            {isError && error.response && <ErrorMsg>{error?.response?.data?.message}</ErrorMsg>}
            {isError && !error?.response?.data?.message && <ErrorMsg>{error.message}</ErrorMsg>}
        </Container>
    )
}

export default OptionsDelete;
