import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContainerStyle = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    font-size: 11px;
    width: 100%;
    height: 100%;
    margin-top: 15px;
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