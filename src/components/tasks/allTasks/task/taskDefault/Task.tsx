import { ChangeEvent, useState } from "react";

// style
import { CheckboxContainer, HiddenCheckBox, StyledCheckbox, Text } from "./style/Task";

// assets
import tickIcon from "../../../../../assets/tick.svg";

// hooks
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useTask from "../../../../../hooks/tasks/useTask";

interface Itask {
    taskId: string
    taskName: string
    taskDescription: string
    state: boolean
}

const TaskDefault = ({ taskId, taskName, taskDescription, state }: Itask) => {
    const api = useAxiosPrivate();
    const { setTask } = useTask();

    const [checked, setChecked] = useState<boolean>(state)
    const [data, setData] = useState({ name: taskName, state: !state, id: taskId });

    const handleCheckBoxChange = (e: ChangeEvent) => {
        setChecked(!checked);

        const checkString = e.currentTarget.attributes[1].value;
        const convertBoolean = (data: string): boolean => {
            if (data === "true") return true
            return false
        }

        const check = convertBoolean(checkString);

        setData({
            name: taskName,
            state: check,
            id: taskId,
        })

        axiosPost();
    }

    const openModal = () => {
        setTask({ taskId, taskName, taskDescription })
    }

    function axiosPost() {
        return api.put('taskstate', data)
    }

    return (
        <CheckboxContainer>
            <HiddenCheckBox
                name="tasks"
                value={taskName as string}
                checked={checked}
                onChange={handleCheckBoxChange}
                key={taskId}
            />
            <StyledCheckbox
                <any> onClick={handleCheckBoxChange}
                styleChecked={checked}
                data-checked={checked}
                data-name={taskName}
            >
                <img
                    src={tickIcon}
                    alt="tickICon"
                    style={{ width: '10px' }}
                />
            </StyledCheckbox>
            <Text
                onClick={openModal}
                styleChecked={checked}
            >
                {taskName}
            </Text>
        </CheckboxContainer>
    )
}

export default TaskDefault