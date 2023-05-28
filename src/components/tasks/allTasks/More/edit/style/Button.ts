import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../../../globalStyles/Devices.util";

const Button = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    
    @media ${device.mobileS}{
        font-size: 18px;
    }

    @media ${device.tablet}{
        font-size: 13px;
    }
`

export default Button;