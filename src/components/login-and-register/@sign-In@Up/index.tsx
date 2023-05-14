import { ReactNode } from "react";
import { Container, Question, SignStyle } from "./style/Sign";

interface ISign {
    question: ReactNode,
    link: string,
    textLink: ReactNode
}

const Sign = ({ question, link, textLink }: ISign) => {
    return (
        <Container>
            <Question>{question}</Question>
            <SignStyle to={link}>{textLink}</SignStyle>
        </Container>
    )
}

export default Sign