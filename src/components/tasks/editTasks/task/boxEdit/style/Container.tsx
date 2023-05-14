import { ReactNode } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ContainerStyle = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 11px;

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 51;

`

interface IContainer {
    children: ReactNode
}

const code = new Date().getMilliseconds();

const Container = ({ children }: IContainer) => {
    return (
        <ContainerStyle
            key={`ContainerModal${code}`}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </ContainerStyle>
    )
}

export default Container;
