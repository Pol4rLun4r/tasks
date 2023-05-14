// style
import Background from "./style/Background";
import Window from "./style/Window";
import Container from "./style/Container";

// component
import Title from "./@Title/Title";
import Form from "./Form/Form";
import Close from "./Close/Close";

// hooks
import useTask from "../../../../../hooks/tasks/useTask";

interface IBox {
    taskName: string,
    taskDescription: string
    taskSubTasks: []
    taskId: string
}

const BoxEdit = ({ taskId, taskName, taskDescription, taskSubTasks }: IBox) => {
    const { setEditById } = useTask();

    const handleCancel = () => {
        setEditById('');
    }

    return (
        <Container data-modal={'boxEdit'}>
            <Background handle={handleCancel} />
            <Window>
                <Close />
                <Title title="edit task" />
                <Form
                    Id={taskId}
                    TaskName={taskName}
                    Description={taskDescription}
                    SubTasks={taskSubTasks}
                />
            </Window>
        </Container>
    )
}

export default BoxEdit;