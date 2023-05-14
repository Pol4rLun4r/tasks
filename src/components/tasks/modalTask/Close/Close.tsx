// style
import Icon from "./@Icon/Icon"
import Button from "./style/Button"

// hooks
import useTask from "../../../../hooks/tasks/useTask"

const Close = () => {
    const { setTask } = useTask();

    const handleClose = () => {
        setTask((prev) => { return { ...prev, taskId: '' } });
        setTimeout(()=>{
            setTask({})
        }, 500)
    }

    return (
        <Button
            onClick={handleClose}
        >
            <Icon />
        </Button>
    )
}

export default Close