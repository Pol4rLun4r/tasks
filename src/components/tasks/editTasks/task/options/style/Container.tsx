import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const ContainerStyle = styled(motion.div)`
    font-size: 10px;
    display: flex;
    flex-direction: row;

    background-color: #8b8b8b14;
    backdrop-filter: blur(5px);
    border-radius: 5px;

    position: absolute;
    right: 10px;

    padding-left: 5px;
`

interface IContainer {
    children: ReactNode
}

const Container = ({ children }: IContainer) => {
    return (
        <ContainerStyle
            key="optionsModal"
            initial={{
                opacity: 0,
                x: 10
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            exit={{
                opacity: 0,
                x: 5
            }}
        >
            {children}
        </ContainerStyle>
    )
}

export default Container;