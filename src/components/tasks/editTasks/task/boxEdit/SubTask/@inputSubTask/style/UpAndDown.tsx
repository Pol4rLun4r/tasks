import styled, { css } from "styled-components";
import { ReactComponent as ArrowUp } from "../../../../../../../../assets/tasks/arrow-up.svg"
import { ReactComponent as ArrowDown } from "../../../../../../../../assets/tasks/arrow-down.svg"
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { device } from "../../../../../../../../globalStyles/Devices.util";

export const UpDownContainerStyle = styled(motion.div)`
    display: flex;
    flex-direction: column;

    position: absolute;
    
    @media ${device.mobileS}{
        left: -5px;
        width: 28px;
    }
    
    @media ${device.mobileL}{
        left: 1px;
    }

    @media ${device.mobile600px}{
        left: 10px;
    }

    @media ${device.tablet}{
        left: 0;
        width: 18px;
    }

`

const styleSvgs = () => {
    return css`
        @media ${device.mobileS}{
            width: 25px;
        }

        @media ${device.tablet}{
            width: 18px;
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
        <Button onClick={handle}>
            <UpIcon />
        </Button>
    )
}

export const Down = ({ handle }: Ihandle) => {
    return (
        <Button onClick={handle}>
            <DownIcon />
        </Button>
    )
}