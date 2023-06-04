import styled from "styled-components";
import { device } from "../../../../../../globalStyles/Devices.util";

const Button = styled.button.attrs({ type: 'button' })`
    background-color: #C83333;
    border-radius: 3px;
    color: white;
    border: none;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: none;
    cursor: pointer;

    box-shadow: 2px 2px 20px black;

    @media ${device.mobileS}{
        font-size: 18px;
    }

    @media ${device.tablet}{
        font-size: 13px;
    }
`

export default Button;