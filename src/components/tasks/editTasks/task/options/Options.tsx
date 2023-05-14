// style
import Container from "./style/Container"
import Button from "./style/Button";

// icons
import { Edit, Delete } from "./style/Icons";

// hook
import useTask from "../../../../../hooks/tasks/useTask";

interface IOptions {
  taskId: string
}

const Options = ({ taskId }: IOptions) => {
  const { setDeleteById, setEditById } = useTask();

  const opeDeleteModal = () => {
    setDeleteById(taskId);
  }

  const openEditModal = () => {
    setEditById(taskId);
  }

  return (
    <Container>
      <Button onClick={openEditModal}><Edit /></Button>
      <Button onClick={opeDeleteModal}><Delete /></Button>
    </Container>
  )
}

export default Options;