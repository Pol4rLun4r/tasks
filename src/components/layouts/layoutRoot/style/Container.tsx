import styled from "styled-components";
import { ReactNode } from "react";

import { motion } from "framer-motion";

const ContainerStyle = styled(motion.div)`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: relative;
`

interface IContainer {
    children: ReactNode
}

const Container = ({ children }: IContainer) => {
    return (
        <ContainerStyle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            {children}
        </ContainerStyle>
    )
}

export default Container;