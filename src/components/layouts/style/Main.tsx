import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion"

const MainStyle = styled(motion.div)`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    transition: all 0.5s;

    overflow: hidden;
`
interface IMain {
    children: ReactNode
}

const Main = ({ children }: IMain) => {
    return (
        <MainStyle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            {children}
        </MainStyle>
    )
}

export default Main