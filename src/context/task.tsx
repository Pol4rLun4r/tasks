import { ReactNode, createContext, useState } from "react";

interface ITaskProv {
    children: ReactNode
}

type IObjSubTask = {
    id: string
    name: string
    state: boolean
}

interface ITaskContext {
    task: {
        taskName?: string
        taskDescription?: string
        taskSubTasks?: IObjSubTask[]
        taskId?: string
    }
    setTask: React.Dispatch<React.SetStateAction<{
        taskName?: string
        taskDescription?: string
        taskSubTasks?: IObjSubTask[]
        taskId?: string
    }>>
    // ==================================== //
    editTask: {
        taskName?: string
        taskDescription?: string
        taskSubTasks?: IObjSubTask[]
        taskId?: string
    }
    setEditTask: React.Dispatch<React.SetStateAction<{
        taskName?: string
        taskDescription?: string
        taskSubTasks?: IObjSubTask[]
        taskId?: string
    }>>
    // ==================================== //
    deleteById: string
    setDeleteById: React.Dispatch<React.SetStateAction<string>>
    // ==================================== //
    editById: string
    setEditById: React.Dispatch<React.SetStateAction<string>>
}

const ITaskContextState = {
    task: {
        taskName: '',
        taskDescription: '',
        taskSubTasks: [],
        taskId: ''
    },
    setTask: () => { },
    // ==================================== //
    editTask: {
        taskName: '',
        taskDescription: '',
        taskSubTasks: [],
        taskId: ''
    },
    setEditTask: () => { },
    // ==================================== //
    deleteById: '',
    setDeleteById: () => '',
    // ==================================== //
    editById: '',
    setEditById: () => '',
}

const TaskContext = createContext<ITaskContext>(ITaskContextState);

export const TaskProvider = ({ children }: ITaskProv) => {
    const [task, setTask] = useState({});
    const [editTask, setEditTask] = useState({});
    const [deleteById, setDeleteById] = useState('');
    const [editById, setEditById] = useState('');

    return (
        <TaskContext.Provider value={{ task, setTask, editTask, setEditTask, deleteById, setDeleteById, editById, setEditById }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;