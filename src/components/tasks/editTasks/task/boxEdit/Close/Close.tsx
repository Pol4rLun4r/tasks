// style
import Icon from "./@Icon/Icon"
import Button from "./style/Button"

// hooks
import useTask from "../../../../../../hooks/tasks/useTask";

const Close = () => {
    const { setEditById } = useTask();

    const handleClose = () => {
        setEditById('');
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