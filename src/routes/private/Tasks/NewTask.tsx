import Title from "../../../components/tasks/newTask/@Title/Title";
import Back from "../../../components/@back/Back";
import Window from "../../../globalStyles/Window";
import Form from "../../../components/tasks/newTask/Form/Form";

const NewTask = () => {
    return (
        <>
            <Window>
                <Title title="new task" />
                <Form />
            </Window>
            <Back />
        </>

    )
}

export default NewTask;