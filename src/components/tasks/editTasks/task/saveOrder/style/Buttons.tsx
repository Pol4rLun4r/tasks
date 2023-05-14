import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const SaveOrderStyle = styled(motion.button).attrs({ type: 'button' })`
    background-color: #C83333;
    border-radius: 3px;
    color: white;
    border: none;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
`

const CancelStyle = styled(motion.button).attrs({ type: 'button' })`
    background-color: #ffffff;
    border: none;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    cursor: pointer;
`

interface IBox {
    taskId: string
}

interface Int {
    children: ReactNode
    handle: any
}

export const SaveOrderButton = ({ children, handle }: Int) => {
    return (
        <SaveOrderStyle
            key="Delete"
            initial={{
                opacity: 0,
                y: -20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.3,

            }}

            onClick={handle}
        >
            {children}
        </SaveOrderStyle>
    )
}

export const Cancel = ({ children, handle }: Int) => {
    return (
        <CancelStyle
            key="Cancel"
            initial={{
                opacity: 0,
                y: -20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.3,

            }}
            onClick={handle}
        >
            {children}
        </CancelStyle>
    )
}