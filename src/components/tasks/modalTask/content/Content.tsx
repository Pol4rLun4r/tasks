// style
import Container from "./style/Container"
import TaskName from "./style/TaskName"
import SubContainer from "./style/subContainer"

// components
import Description from "./style/Description"
import Task from "./task/Task"

// hooks
import useTask from "../../../../hooks/tasks/useTask"
import useCheckTask from "../../../../hooks/tasks/useCheckTask"
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate"

// fetch
import { useQuery } from "react-query"

type IObjSubTask = {
    id: string
    name: string
    state: boolean
}

type Itasks = {
    id: string;
    name: string;
    description: string;
    subTasks: IObjSubTask[]
    state: boolean;
}

const Content = () => {
    const { task } = useTask();
    const { description, subTasks } = useCheckTask();

    return (
        <Container>
            <TaskName>{task.taskName}</TaskName>

            {description &&
                <Description>{task.taskDescription}</Description>
            }

            {subTasks &&
                <SubContainer>
                    {task?.taskSubTasks?.map(task => {
                        return (
                            <Task
                                key={task.id}
                                taskId={task.id}
                                taskName={task.name}
                                state={task.state}
                            />
                        )
                    })}
                </SubContainer>
            }
        </Container>
    )
}

export default Content;