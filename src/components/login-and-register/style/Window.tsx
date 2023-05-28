import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../globalStyles/Devices.util";
import { topAndBottom, leftAndRight } from "../../../globalStyles/Sides.util";
import { ReactNode } from "react";

const WindowStyle = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    
    transition: all 0.5s;

    @media ${device.mobileS}{
        width: 100%;
        height: 100%;

        padding-top: ${topAndBottom.mobileS};
        padding-bottom: ${topAndBottom.mobileS};
        padding-left: ${leftAndRight.mobileS};
        padding-right: ${leftAndRight.mobileS};
    }

    @media ${device.mobileM}{
        padding-top: ${topAndBottom.mobileM};
        padding-bottom: ${topAndBottom.mobileM};
        padding-left: ${leftAndRight.mobileM};
        padding-right: ${leftAndRight.mobileM};
    }

    @media ${device.mobileL}{
        padding-top: ${topAndBottom.mobileL};
        padding-bottom: ${topAndBottom.mobileL};
        padding-left: ${leftAndRight.mobileL};
        padding-right: ${leftAndRight.mobileL};
    }

    @media ${device.myMobile}{
        padding-top: ${topAndBottom.myMobile};
        padding-bottom: ${topAndBottom.myMobile};
        padding-left: ${leftAndRight.myMobile};
        padding-right: ${leftAndRight.myMobile};
    }

    @media ${device.mobile500px}{
        padding-top: ${topAndBottom.mobile500px};
        padding-bottom: ${topAndBottom.mobile500px};
        padding-left: ${leftAndRight.mobile500px};
        padding-right: ${leftAndRight.mobile500px};
    }

    @media ${device.mobile600px}{
        width: 90%;

        padding-top: ${topAndBottom.mobile600px};
        padding-bottom: ${topAndBottom.mobile600px};
        padding-left: ${leftAndRight.mobile600px};
        padding-right: ${leftAndRight.mobile600px};
    }

    @media ${device.tablet}{
        width: auto;
        height: auto;
        border: 2.5px solid;
        border-image: linear-gradient(220deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 0.2) 100%) 1;

    }
`

interface IWindow {
    children: ReactNode
}

const Window = ({ children }: IWindow) => {
    return (
        <WindowStyle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </WindowStyle>
    )
}

export default Window