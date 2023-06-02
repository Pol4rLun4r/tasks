import styled from "styled-components";
import { ReactComponent as RemoveIcon } from "../../../../../../../../assets/close.svg";
import { motion } from "framer-motion";
import { device } from "../../../../../../../../globalStyles/Devices.util";

const RemoveStyle = styled(RemoveIcon)`
    cursor: pointer;

    @media ${device.mobileS}{
        width: 28px;
    }

    @media ${device.tablet}{
        width: 20px;
    }
`

const Button = styled(motion.button)`
    background-color: transparent;
    border: none;

    position: absolute;
    
    @media ${device.mobileS}{
        right: -1px;
    }
    
    @media ${device.mobileL}{
        right: 3px;
    }

    @media ${device.mobile600px}{
        right: 10px;
    }

    @media ${device.tablet}{
        right: 0;
    }
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