import TaskDefault from "./taskDefault/Task"

// hooks
import useArrayIsFull from "../../../../hooks/useArrayIsFull"
import TaskWithInfo from "./taskWithInfo/Task"

interface Itask {
    taskName: string,
    taskDescription: string
    taskSubTasks: []
    state: boolean,
    taskId: string
}

const Task = ({ taskName, taskDescription, taskSubTasks, state, taskId }: Itask) => {

    const subTasks = useArrayIsFull(taskSubTasks);

    if (!subTasks) {
        return (
            <TaskDefault
                taskId={taskId}
                taskName={taskName}
                state={state}
                taskDescription={taskDescription}
            />

        )
    }

    return (
        <TaskWithInfo
            taskId={taskId}
            taskName={taskName}
            state={state}
            taskDescription={taskDescription}
            taskSubTasks={taskSubTasks}
        />)
}

export default Task;