import Container from "./style/Container";
import Icon from "./@logo/logo";
import Window from "./style/Window";
import Text from "./style/Text";

interface ITitle {
    title: string;
}

const Title = ({ title }: ITitle) => {
    return (
        <Container>
            <Icon />
            <Window>
                <Text>{title}</Text>
            </Window>
        </Container>
    )
}

export default Title;