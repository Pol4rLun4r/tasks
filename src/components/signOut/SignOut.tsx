// style
import Button from "./style/Button"
import Container from "./style/Container";
import SignOutIcon from "./@icon/Add";

// handleLogout
import useLogout from "../../hooks/useLogout";
import useTask from "../../hooks/tasks/useTask";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
    const logout = useLogout();
    const { setTask } = useTask();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        setTask({})
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