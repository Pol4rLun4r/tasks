import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const ContainerStyle = styled(motion.div)`
    background-color: transparent;
    padding: 5px;
    border: 2px solid #ffffff;
    border-radius: 5px;

    position: absolute;
    right: 25px;
    top: 10px;
`

interface IContainer {
    children: ReactNode
}

const Container = ({ children }: IContainer) => {
    return (
        <ContainerStyle
            key="modal"
            initial={{
                right: '15px',
                opacity: 0,
            }}
            animate={{
                right: '25px',
                opacity: 1,
            }}
            exit={{
                right: '15px',
                opacity: 0,
            }}
        >
            {children}
        </ContainerStyle>
    )
}

export default Container;