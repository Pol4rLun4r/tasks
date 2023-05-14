import styled from "styled-components";
import { motion } from "framer-motion";

const BackgroundStyle = styled(motion.div)`
    width: 100%;
    height: 100%;

    border-radius: 3px;
    background: linear-gradient(250.15deg, rgb(23, 23, 23, 0.8) 3.29%, rgb(18, 18, 18, 0.8) 94.75%);
    backdrop-filter: blur(5px);
`

interface IBackGround {
    handle: any
}

const code = new Date().getTime().toString();

const Background = ({ handle }: IBackGround) => {
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
            transition={{ duration: 0.6 }}
            onClick={handle}
        />
    )
}

export default Background;