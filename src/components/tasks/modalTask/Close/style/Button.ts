import styled from "styled-components";
import { device } from "../../../../../globalStyles/Devices.util";

const Button = styled.button`
    background-color: transparent;
    border: none;

    position: absolute;

    @media ${device.mobileS}{
        right: -5px;
        top: -5px;
    }
    
    @media ${device.mobile500px}{
        right: -20px;
        top: -10px;
    }
    
    @media ${device.mobile600px}{
        right: -40px;
        top: -25px;
    }
`

export default Button;