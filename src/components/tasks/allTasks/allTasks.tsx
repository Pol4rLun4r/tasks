import { useEffect } from "react";

// style
import Container from "./style/Container";
import { ErrorMsg, LoadingMsg } from "../../../globalStyles/Messages";

// component
import Task from "./task/Task";
import NoTasks from "./noTasks/NoTasks";
import Add from "./Add/Index";

//api
import { useQuery } from "react-query";

// hooks
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useArrayIsFull from "../../../hooks/useArrayIsFull";

type Itasks = {
    id: string;
    name: string;
    index: number;
    description: string;
    subTasks: []
    state: boolean;
}

const AllTasks = () => {
    const api = useAxiosPrivate();

    const { data, isLoading, error } = useQuery<Itasks[]>('tasks', async () => {
        const response = await api.get('task')
        return response.data;
    })
    data?.sort((a, b) => { return a.index - b.index });

    const isTasks = useArrayIsFull(data);

    useEffect(() => {
        localStorage.removeItem("originalData");
    }, [])

    return (
        <>
            <Container>
                {isLoading && <LoadingMsg>Loading...</LoadingMsg>}
                {error as any && <ErrorMsg>NetWork Error</ErrorMsg>}

                {!isTasks && <NoTasks />}

                {isTasks && data?.map(task => {
                    return (
                        <Task
                            key={task.index}
                            taskId={task.id}
                            state={task.state}
                            taskName={task.name}
                            taskDescription={task.description}
                            taskSubTasks={task.subTasks}
                        />
                    )
                })}
            </Container>
            {isTasks && <Add />}
        </>
    )
}

export default AllTasks;