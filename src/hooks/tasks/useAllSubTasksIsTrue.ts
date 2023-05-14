type ISubTask = {
    state: boolean
}

const useAllSubTasksIsTrue = (subTasks: ISubTask[]) => {
    const handleSubTask = subTasks.map(subtask => {
        return subtask.state
    })

    const isTrue = handleSubTask.includes(false)

    return isTrue;
}

export default useAllSubTasksIsTrue;