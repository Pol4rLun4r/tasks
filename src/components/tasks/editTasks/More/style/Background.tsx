import { ReactNode } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const BackgroundStyle = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 11px;

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 51;

    background: linear-gradient(250.15deg, rgb(23, 23, 23, 0.8) 3.29%, rgb(18, 18, 18, 0.8) 94.75%);
    backdrop-filter: blur(5px);
`

interface IBackground {
    children: ReactNode
}

const code = new Date().getMilliseconds();

const Background = ({ children }: IBackground) => {
    return (
        <BackgroundStyle
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
        </BackgroundStyle>
    )
}

export default Background;
