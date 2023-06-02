import styled, { css } from "styled-components";
import { ReactComponent as ArrowUp } from "../../../../../../assets/tasks/arrow-up.svg"
import { ReactComponent as ArrowDown } from "../../../../../../assets/tasks/arrow-down.svg"
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { device } from "../../../../../../globalStyles/Devices.util";

const UpDownContainerStyle = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #00000044;
    backdrop-filter: blur(5px);
    border-radius: 5px;

    
    position: absolute;
    left: 5px;
    
    @media ${device.mobileS}{
        height: 40px;
    }

    @media ${device.tablet}{
        height: 30px;
        padding-bottom: 5px;
    }

`

const styleSvgs = () => {
    return css`
        @media ${device.mobileS}{
            width: 28px;
        }

        @media ${device.tablet}{
            width: 20px;
        }
    `
}

const UpIcon = styled(ArrowUp)`
    ${styleSvgs}
`

const DownIcon = styled(ArrowDown)`
    ${styleSvgs}
`

const Button = styled.button.attrs({ type: 'button' })`
    background-color: transparent;
    border: none;
    
    @media ${device.mobileS}{
        height: 25px;
    }
    
    @media ${device.tablet}{
        height: 12px;
    }
`

interface Ihandle {
    handle: any
}

interface IContainer {
    children: ReactNode
}

export const UpDownContainer = ({ children }: IContainer) => {
    return (
        <UpDownContainerStyle

            initial={{
                opacity: 0,
                x: -10
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            exit={{
                opacity: 0,
                x: -10
            }}
        >
            {children}
        </UpDownContainerStyle>
    )
}

export const Up = ({ handle }: Ihandle) => {
    return (
        <Button onClick={() => handle()}>
            <UpIcon />
        </Button>
    )
}

export const Down = ({ handle }: Ihandle) => {
    return (
        <Button onClick={() => handle()}>
            <DownIcon />
        </Button>
    )
}