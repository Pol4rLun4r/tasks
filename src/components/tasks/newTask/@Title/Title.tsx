import Container from "./style/Container";
import Window from "./style/Window";
import Text from "./style/Text";
import Icon from "./@Icon/Icon";

interface ITitle {
    title: string;
}

const Title = ({ title }: ITitle) => {
    return (
        <Container>
            <Window>
                <Icon/>
                <Text>{title}</Text>
            </Window>
        </Container>
    )
}

export default Title;