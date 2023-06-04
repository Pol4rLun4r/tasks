import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { device } from "../../../../../../globalStyles/Devices.util";

const DeleteStyle = styled(motion.button).attrs({ type: 'button' })`
    background-color: #C83333;
    border-radius: 3px;
    color: white;
    border: none;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
    
    @media ${device.mobileS}{
        font-size: 18px;
    }

    @media ${device.tablet}{
        font-size: 15px;
    }

`

const CancelStyle = styled(motion.button).attrs({ type: 'button' })`
    background-color: #ffffff;
    border: none;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    cursor: pointer;

    @media ${device.mobileS}{
        font-size: 18px;
    }

    @media ${device.tablet}{
        font-size: 15px;
    }
`

interface IBox {
    taskId: string
}

interface Int {
    children: ReactNode
    handle: any
}

export const Delete = ({ children, handle }: Int) => {
    return (
        <DeleteStyle
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

            onClick={() => handle()}
        >
            {children}
        </DeleteStyle>
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
            onClick={() => handle()}
        >
            {children}
        </CancelStyle>
    )
}