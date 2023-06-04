import Back from "../../../components/@back/Back"
import Tasks from "../../../components/tasks/editTasks"
import Title from "../../../components/tasks/editTasks/@Title/Title"
import Window from "../../../globalStyles/Window"
import More from "../../../components/tasks/editTasks/More/More"

const EditTasks = () => {
    return (
        <>
            <Window>
                <More />
                <Title title="edit tasks" />
                <Tasks />
            </Window>
            <Back />
        </>
    )
}

export default EditTasks