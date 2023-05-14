import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

const Modal = styled.div`
    position: fixed;
    z-index: 50;

    @media ${device.mobileS}{
        width: 100%;
        height: 100%;
    }

    @media ${device.mobile600px}{
        width: auto;
        height: auto;
    }
`

export default Modal;