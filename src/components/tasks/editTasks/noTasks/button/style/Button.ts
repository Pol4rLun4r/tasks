import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonStyle = styled(motion.button)`
    background-color: transparent;
    color: rgba(118, 120, 123, 0.58);
    border: 2px solid rgba(118, 120, 123, 0.58);
    padding: 10px 20px 10px 20px;

    cursor: pointer;

    display: flex;
    align-items: center;

    margin-top: 10px;
`
export default ButtonStyle;