import useTask from "./useTask";
import useStringIsTrue from "../useStringIsTrue";
import useArrayIsFull from "../useArrayIsFull";
import useIsBoolean from "../useIsBoolean";

const useCheckTask = () => {
    const { task } = useTask();

    const id = useStringIsTrue(task?.taskId);
    const name = useStringIsTrue(task?.taskName);
    const description = useStringIsTrue(task?.taskDescription);
    const subTasks = useArrayIsFull(task?.taskSubTasks);

    return { id, name, description, subTasks }
}

export default useCheckTask;