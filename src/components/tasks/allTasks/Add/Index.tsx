import Button from "./Button";
import Container from "./style/Container";
import AddIcon from "./@icon/Add";

const Add = () => {
    return (
        <Container>
            <Button toLink="newtask">
                <AddIcon/>
            </Button>
        </Container>
    )
}

export default Add;