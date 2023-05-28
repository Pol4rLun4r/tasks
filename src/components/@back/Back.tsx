// style
import BackIcon from "./@icon/icon";
import Button from "./style/Button";
import Container from "./style/Container";

// handleBack
import { useNavigate } from "react-router-dom";

const Back = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <Container>
            <Button onClick={handleBack}>
                <BackIcon />
            </Button>
        </Container>
    )
}

export default Back