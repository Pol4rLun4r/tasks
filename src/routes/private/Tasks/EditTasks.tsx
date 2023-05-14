import Back from "../../../components/@back/Back"
import Tasks from "../../../components/tasks/editTasks"
import Title from "../../../components/tasks/editTasks/@Title/Title"
import Window from "../../../globalStyles/Window"

const EditTasks = () => {
    return (
        <>
            <Window>
                <Title title="edit tasks" />
                <Tasks />
            </Window>
            <Back />
        </>
    )
}

export default EditTasks