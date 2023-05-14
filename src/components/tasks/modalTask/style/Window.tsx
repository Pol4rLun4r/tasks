import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../../globalStyles/Devices.util";
import { topAndBottom, leftAndRight } from "../../../../globalStyles/Sides.util";
import { ReactNode } from "react";

const WindowStyle = styled(motion.div)`
    background: linear-gradient(250.15deg, rgb(23, 23, 23, 0.8) 3.29%, rgb(18, 18, 18, 0.8) 94.75%);
    backdrop-filter: blur(3px);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 60px;
    padding-bottom: 60px;

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
        padding-top: ${topAndBottom.mobile600px};
        padding-bottom: ${topAndBottom.mobile600px};
        padding-left: ${leftAndRight.mobile600px};
        padding-right: ${leftAndRight.mobile600px};

        width: auto;
        height: auto;
        border: 2.5px solid;
        border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 0.3) 100%) 1;
        
    }
`

interface IWindow {
    children: ReactNode
}

const Window = ({ children }: IWindow) => {
    return (
        <WindowStyle
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </WindowStyle>
    )
}

export default Window