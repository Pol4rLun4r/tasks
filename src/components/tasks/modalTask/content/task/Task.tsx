import { ChangeEvent, useState } from "react";

// style
import { CheckboxContainer, HiddenCheckBox, StyledCheckbox, Text } from "./style/Task";

// assets
import tickIcon from "../../../../../assets/tick.svg";

// hooks
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import queryClient from "../../../../../services/queryClient";

interface Itask {
    taskId: string
    taskName: string,
    state: boolean,
}

const Task = ({ taskId, taskName, state }: Itask) => {
    const api = useAxiosPrivate();

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

    async function axiosPost() {
        await api.put('subtask', data)
        await queryClient.refetchQueries({ queryKey: ['tasks'], active: true })
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
            <Text styleChecked={checked}>{taskName}</Text>
        </CheckboxContainer>
    )
}

export default Task;