import styled from "styled-components";
import { motion } from "framer-motion"
import { ReactNode } from "react";

const upperSpace = '10px';
const fontSize = '18px';

const ErrorMsgStyle = styled(motion.p)`
    font-size: ${fontSize};
    margin-top: ${upperSpace};
    color: #C83333;
    text-shadow: 0px 0px 3px #C83333;
`

const LoadingMsgStyle = styled(motion.p)`
    font-size: ${fontSize};
    margin-top: ${upperSpace};
    text-shadow: 0px 0px 3px #FFFFFF;
`

const SuccessMsgStyle = styled(motion.p)`
    font-size: ${fontSize};
    margin-top: ${upperSpace};
    text-shadow: 0px 0px 3px #FFFFFF;
`

interface IHandle {
    children: ReactNode
}

export const ErrorMsg = ({ children }: IHandle) => {
    return (
        <ErrorMsgStyle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </ErrorMsgStyle>
    )
}

export const LoadingMsg = ({ children }: IHandle) => {
    return (
        <LoadingMsgStyle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            
        >
            {children}
        </LoadingMsgStyle>
    )
}

export const SuccessMsg = ({ children }: IHandle) => {
    return (
        <SuccessMsgStyle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            
        >
            {children}
        </SuccessMsgStyle>
    )
}