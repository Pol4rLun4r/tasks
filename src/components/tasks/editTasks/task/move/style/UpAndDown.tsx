import styled, { css } from "styled-components";
import { ReactComponent as ArrowUp } from "../../../../../../assets/tasks/arrow-up.svg"
import { ReactComponent as ArrowDown } from "../../../../../../assets/tasks/arrow-down.svg"
import { ReactNode } from "react";
import { motion } from "framer-motion";

const UpDownContainerStyle = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-right: 2px;
    margin-bottom: 6px;

    position: absolute;
    left: -18px;
`

const styleSvgs = () => {
    return css`
        width: 18px;
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
    height: 12px;
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