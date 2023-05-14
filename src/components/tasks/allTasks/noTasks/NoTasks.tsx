import Button from "./button/Button"
import Container from "./style/Container"
import TextContainer from "./style/TextContainer"

const NoTasks = () => {
    return (
        <Container>
            <TextContainer>it seems that you have no tasks...</TextContainer>
            <Button />
        </Container>
    )
}

export default NoTasks;