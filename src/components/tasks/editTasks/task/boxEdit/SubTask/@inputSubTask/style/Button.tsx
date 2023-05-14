import styled from "styled-components";
import { ReactComponent as RemoveIcon } from "../../../../../../../../assets/close.svg";
import { motion } from "framer-motion";

const RemoveStyle = styled(RemoveIcon)`
    width: 20px;
    cursor: pointer;
`

const Button = styled(motion.button)`
    background-color: transparent;
    border: none;

    position: absolute;
    right: 0;
`

interface IRemove {
    handle: any
}

const Remove = ({ handle }: IRemove) => {
    return (
        <Button
            onClick={handle}
            type="button"

            initial={{
                opacity: 0,
                x: 10
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            exit={{
                opacity: 0,
                x: 10
            }}
        >
            <RemoveStyle />
        </Button>
    )
}

export default Remove;