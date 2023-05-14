import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../../globalStyles/Devices.util";
import { ReactNode } from "react";

const MotionDivStyle = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media ${device.tablet}{
        justify-content: center;
    }
`


interface IMotionDiv {
    children: ReactNode
}

const MotionDiv = ({ children }: IMotionDiv) => {
    return (
        <MotionDivStyle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            {children}
        </MotionDivStyle>
    )
};


export default MotionDiv;