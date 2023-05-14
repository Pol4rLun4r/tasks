import { ReactNode } from "react";

// style
import ButtonStyle from "./style/Button";

interface IButton {
    toLink: string
    children: ReactNode
}

const Button = ({ children, toLink }: IButton) => {
    return (
        <ButtonStyle to={toLink}>{children} </ButtonStyle>
    )
};

export default Button;