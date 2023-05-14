import { useContext } from "react";
import TaskContext from "../../context/task";

const useTask = () =>{
    return useContext(TaskContext);
}

export default useTask;