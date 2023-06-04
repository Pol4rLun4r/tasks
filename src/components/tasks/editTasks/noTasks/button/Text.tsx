import { ReactNode } from "react";
import TextStyle from "./style/Text";

interface Itext {
    isHover: boolean
    children: ReactNode
}

const Text = ({ children, isHover }: Itext) => {
    return (
        <TextStyle
            animate={{
                color: isHover ? '#ffffff' : 'rgba(118, 120, 123, 0.58)',
                textShadow: isHover ? '0px 0px 10px #ffffff' : '0px 0px 0px rgba(123, 123, 32, 0)'
            }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </TextStyle>
    )
}

export default Text;