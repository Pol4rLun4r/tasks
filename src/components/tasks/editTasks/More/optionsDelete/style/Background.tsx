import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BackgroundStyle = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    border-radius: 3px;
    background: linear-gradient(250.15deg, rgb(23, 23, 23, 0.8) 3.29%, rgb(18, 18, 18, 0.8) 94.75%);
    backdrop-filter: blur(0.8px);
`

interface IBackGround {
    children: ReactNode
}

const code = new Date().getMilliseconds().toString();

const Background = ({ children }: IBackGround) => {
    return (
        <BackgroundStyle
            key={`backgroundModal${code}`}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
            transition={{duration: 0.6}}
        >
            {children}
        </BackgroundStyle>
    )
}

export default Background;