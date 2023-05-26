// style
import Button from "./style/Button"
import Container from "./style/Container";
import SignOutIcon from "./@icon/Add";

// handleLogout
import useLogout from "../../hooks/useLogout";
import useTask from "../../hooks/tasks/useTask";
import { useNavigate } from "react-router-dom";

// reactRouter
import queryClient from "../../services/queryClient";

const SignOut = () => {
    const logout = useLogout();
    const { setTask, setDeleteById, setEditById, setEditTask } = useTask();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        setTask({});
        setEditTask({});
        setDeleteById('');
        setEditById('');
        localStorage.clear();
        queryClient.clear();
        navigate('/login');
    };

    return (
        <Container>
            <Button onClick={handleLogout}>
                <SignOutIcon />
            </Button>
        </Container>
    )
};

export default SignOut;