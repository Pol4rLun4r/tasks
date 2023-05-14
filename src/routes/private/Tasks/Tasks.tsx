// style
import Window from "../../../components/tasks/allTasks/style/Window";

// components
import Title from "../../../components/tasks/allTasks/@Title/Title";
import More from "../../../components/tasks/allTasks/More/More" ;
import AllTasks from "../../../components/tasks/allTasks/allTasks";

const Tasks = () => {
    return (
        <Window>
            <More />
            <Title title={"tasks"} />
            <AllTasks />
        </Window>
    )
};

export default Tasks;